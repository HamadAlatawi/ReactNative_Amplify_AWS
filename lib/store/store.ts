import { create } from 'zustand';
import { NavigationStore } from "../types/store.ts";

export const useNavigationStore = create<NavigationStore>((set, get) => ({
    currentScreen: 'home',
    setScreen: (screen) => set({ currentScreen: screen }),
    getCurrentScreen: () => get().currentScreen,
}));