import { useBreakStore } from "../stores/BreakStore";
import { useSessionStore } from "../stores/SessionStore";
import { useTimerStore } from "../stores/TimerStore";
import { useStartStopStore } from "../stores/StartStopStore";
import { useStatusStore } from "../stores/StatusStore";

export const ResetButton = () => {
  const resetBreak = useBreakStore((state) => state.reset);
  const resetSession = useSessionStore((state) => state.reset);
  const stop = useTimerStore((state) => state.stop);
  const resetSS = useStartStopStore((state) => state.reset);
  const resetStatus = useStatusStore((state) => state.reset);

  const handleClick = () => {
    stop();
    resetSS();
    resetStatus();
    resetBreak();
    resetSession();
  };

  return (
    <button id="reset" onClick={handleClick}>
      Reset
    </button>
  );
};
