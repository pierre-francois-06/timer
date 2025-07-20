import create from "zustand";
import { useStartStopStore } from "./StartStopStore";

export const useBreakStore = create((set, get) => ({
  length: 300,
  increment: () => {
    if (get().length < 3600 && !useStartStopStore.getState().running)
      set({
        length: get().length + 60,
      });
  },
  decrement: () => {
    if (get().length > 60 && !useStartStopStore.getState().running)
      set({
        length: get().length - 60,
      });
  },
  reset: () => {
    set({ length: 300 });
  },
}));
