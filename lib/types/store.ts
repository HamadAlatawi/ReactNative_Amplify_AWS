type Screen = 'home' | 'favorites';

export interface NavigationStore {
    currentScreen: Screen;
    setScreen: (screen: Screen) => void;
}