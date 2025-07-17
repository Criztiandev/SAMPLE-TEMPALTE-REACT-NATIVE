import { create } from "zustand";

interface AppState {
  isOnboardingComplete: boolean;
  theme: "light" | "dark" | "system";
  language: string;
  internetState: {
    connectionStatus: "disconnected" | "connecting" | "connected";
    connectionType: "none" | "cellular" | "wifi" | "ethernet";
  };
  notifications: {
    push: boolean;
    email: boolean;
    marketing: boolean;
  };
}

interface AppActions {
  setOnboardingComplete: (complete: boolean) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  setLanguage: (language: string) => void;
  updateNotifications: (
    notifications: Partial<AppState["notifications"]>
  ) => void;
  setInternetState: (internetState: AppState["internetState"]) => void;
}

export const useAppStore = create<AppState & AppActions>()((set, get) => ({
  isOnboardingComplete: false,
  theme: "system",
  language: "en",
  internetState: {
    connectionStatus: "disconnected",
    connectionType: "none",
  },
  notifications: {
    push: true,
    email: true,
    marketing: false,
  },

  setOnboardingComplete: (isOnboardingComplete) =>
    set({ isOnboardingComplete }),

  setTheme: (theme) => set({ theme }),

  setLanguage: (language) => set({ language }),

  setInternetState: (internetState) => set({ internetState }),

  updateNotifications: (notifications) =>
    set({
      notifications: { ...get().notifications, ...notifications },
    }),
}));
