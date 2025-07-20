import { useBreakStore } from "../stores/BreakStore";
import { useSessionStore } from "../stores/SessionStore";

export const TimeSetter = ({ type }) => {
  const useStore = type === "break" ? useBreakStore : useSessionStore;

  const timeLength = useStore((state) => state.length);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div id={`${type}-container`} className="time-setter">
      <label
        htmlFor={`${type}-container`}
        id={`${type}-label`}
      >{`${type} Length`}</label>
      <div id={`${type}-length`}>{timeLength / 60}</div>
      <button id={`${type}-increment`} onClick={increment}>
        +
      </button>
      <button id={`${type}-decrement`} onClick={decrement}>
        -
      </button>
    </div>
  );
};
