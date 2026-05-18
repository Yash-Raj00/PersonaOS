import { create } from "zustand";

type AppState = {
  user: any;
  setUser: (user: any) => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
}));
