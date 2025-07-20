import { TimeSetter } from "./components/TimeSetter";
import { TimeDisplay } from "./components/TimeDisplay";
import { useTimerStore } from "./stores/TimerStore";
import { useStartStopStore } from "./stores/StartStopStore";
import { useStatusStore } from "./stores/StatusStore";
import { useEffect, useRef } from "react";

function App() {
  const timeLeft = useTimerStore((state) => state.timeLeft);
  const running = useStartStopStore((state) => state.running);
  const status = useStatusStore((state) => state.status);
  const changeStatus = useStatusStore((state) => state.setStatus);
  const canPlay = useStartStopStore((state) => state.canPlay);

  const audioRef = useRef(null);

  const playBeep = () => {
    if (canPlay && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        window.addEventListener(
          "click",
          () => {
            audioRef.current.play();
          },
          { once: true }
        );
      });
    }
  };

  useEffect(() => {
    if (timeLeft == 0 && running) {
      changeStatus();
    }
  }, [timeLeft]);

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <div id="time-setter-container">
        <TimeSetter type="session" />
        <TimeSetter type="break" />
      </div>
      <TimeDisplay currentStatus={status} />
      <audio id="beep" ref={audioRef} src="/beep.mp3" preload="auto" />
    </>
  );
}
//
export default App;
