import create from "zustand";

export const useStatusStore = create((set, get) => ({
  status: "session",
  setStatus: () => {
    get().status === "session"
      ? set({ status: "break" })
      : set({ status: "session" });
  },

  reset: () => {
    set({ status: "session" });
  },
}));
