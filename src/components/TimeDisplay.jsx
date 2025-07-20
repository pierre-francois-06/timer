import { useTimerStore } from "../stores/TimerStore";
import { useBreakStore } from "../stores/BreakStore";
import { useSessionStore } from "../stores/SessionStore";
import { ResetButton } from "./ResetButton";
import { StartStopButton } from "./StartStopButton";
import { useEffect } from "react";

export const TimeDisplay = ({ currentStatus }) => {
  const timeLeft = useTimerStore((state) => state.timeLeft);
  const setTimeLeft = useTimerStore((state) => state.setTimeLeft);
  const sessionLength = useSessionStore((state) => state.length);
  const breakLength = useBreakStore((state) => state.length);

  const timeFormat = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (currentStatus === "session") setTimeLeft(sessionLength);
    if (currentStatus === "break") setTimeLeft(breakLength);
  }, [breakLength, sessionLength, currentStatus]);

  return (
    <div id={`display-container`} className="time-display">
      <label htmlFor={`display-container`} id={`timer-label`}>
        {currentStatus}
      </label>
      <div id="time-left">{timeFormat(timeLeft)}</div>
      <StartStopButton />
      <ResetButton />
    </div>
  );
};
