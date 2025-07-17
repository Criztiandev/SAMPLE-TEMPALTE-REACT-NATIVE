import { NAV_THEME } from "@/constants/Colors";
import { useColorScheme } from "@/core/hooks/theme/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof NAV_THEME.light & keyof typeof NAV_THEME.dark
) {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme ?? "light";
  const colorFromProps = props[theme as keyof typeof props];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return NAV_THEME[theme][colorName];
  }
}
