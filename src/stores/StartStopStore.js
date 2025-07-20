import create from "zustand";

export const useStartStopStore = create((set) => ({
  running: false,
  canPlay: false,
  setCanPlay: () => {
    set({ canPlay: true });
  },
  setRunning: (isTrue) =>
    isTrue ? set({ running: true }) : set({ running: false }),
  paused: false,
  setPaused: (isTrue) =>
    isTrue ? set({ paused: true }) : set({ paused: false }),

  reset: () => {
    set({ running: false, paused: false });
  },
}));
