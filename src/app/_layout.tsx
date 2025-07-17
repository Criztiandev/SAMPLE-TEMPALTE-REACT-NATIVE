import "../../global.css";

import { QueryProvider } from "@/components/providers/QueryProvider";
import { NAV_THEME } from "@/constants/Colors";
import { useColorScheme } from "@/core/hooks/theme/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    if (Platform.OS === "web") {
      // Adds the background color to the html element to prevent white background on overscroll.
      if (typeof document !== "undefined") {
        document.documentElement.classList.add("bg-background");
      }
    }
    setIsColorSchemeLoaded(true);
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <QueryProvider>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <Stack />
      </ThemeProvider>
    </QueryProvider>
  );
}
