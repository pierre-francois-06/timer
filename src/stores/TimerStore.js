import create from "zustand";

let interval;

export const useTimerStore = create((set, get) => ({
  timeLeft: 0,
  setTimeLeft: (newTime) => set({ timeLeft: newTime }),

  start: () => {
    if (interval) return;
    interval = setInterval(() => {
      set({ timeLeft: get().timeLeft - 1 });
    }, 1000);
  },

  stop: () => {
    clearInterval(interval);
    interval = null;
  },

  reset: () => {
    clearInterval(interval);
    interval = null;
  },
}));
