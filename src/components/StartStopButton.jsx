import { useStartStopStore } from "../stores/StartStopStore";
import { useTimerStore } from "../stores/TimerStore";

export const StartStopButton = () => {
  const running = useStartStopStore((state) => state.running);
  const paused = useStartStopStore((state) => state.paused);
  const setRunning = useStartStopStore((state) => state.setRunning);
  const setPaused = useStartStopStore((state) => state.setPaused);
  const start = useTimerStore((state) => state.start);
  const stop = useTimerStore((state) => state.stop);
  const setCanPlay = useStartStopStore((state) => state.setCanPlay);

  const startStop = () => {
    switch (true) {
      case !running && !paused:
        setRunning(true);
        start();
        setCanPlay();
        break;
      case running && !paused:
        setPaused(true);
        stop();
        break;
      case running && paused:
        setPaused(false);
        start();
        break;
      default:
        console.info("default");
        break;
    }
  };

  return (
    <>
      <button id="start_stop" onClick={startStop}>
        Start/Stop
      </button>
    </>
  );
};
