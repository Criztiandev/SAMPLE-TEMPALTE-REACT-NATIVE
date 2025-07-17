export const AppConfig = {
  // App Identity
  name: "React Native Expo Base",
  slug: "react-native-expo-base",
  version: "1.0.0",
  description: "A clean and modern React Native Expo base template",

  // App Behavior
  orientation: "portrait" as const,
  userInterfaceStyle: "automatic" as const,
  scheme: "reactnativeexpobase",

  // Expo Features
  newArchEnabled: true,
  edgeToEdgeEnabled: true,

  // Assets
  assets: {
    icon: "./src/assets/images/icon.png",
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    splash: {
      image: "./src/assets/images/splash-icon.png",
      imageWidth: 200,
      resizeMode: "contain" as const,
      backgroundColor: "#ffffff",
    },
    favicon: "./src/assets/images/favicon.png",
  },

  // Platform Specific
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.yourcompany.reactnativeexpobase", // Change this to your bundle ID
  },

  android: {
    package: "com.yourcompany.reactnativeexpobase", // Change this to your package name
    versionCode: 1,
  },

  // Web Configuration
  web: {
    bundler: "metro" as const,
    output: "static" as const,
  },

  // Development
  development: {
    enableTypedRoutes: true,
    enableHermes: true,
  },

  // Build Configuration
  build: {
    development: {
      developmentClient: true,
      distribution: "internal" as const,
    },
    preview: {
      distribution: "internal" as const,
    },
    production: {
      distribution: "store" as const,
    },
  },

  env: {
    NODE_ENV: process.env.NODE_ENV || "development",
    PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000",
  },
} as const;

export type AppConfigType = typeof AppConfig;
