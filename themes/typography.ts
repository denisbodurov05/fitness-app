import { ThemeMode, Typography } from "@/types/theme";

/**
 * Creates Material-UI standard typography system adapted for React Native
 * Font sizes are in pixels for React Native compatibility
 * @param mode - Theme mode (light/dark)
 * @param fontFamily - Base font family
 */
export function createTypography(
  mode: ThemeMode,
  fontFamily: string = "System"
): Typography {
  return {
    fontFamily,
    h1: {
      fontFamily,
      fontWeight: "300",
      fontSize: 96,
      lineHeight: 112,
      letterSpacing: -1.5,
    },
    h2: {
      fontFamily,
      fontWeight: "300",
      fontSize: 60,
      lineHeight: 72,
      letterSpacing: -0.5,
    },
    h3: {
      fontFamily,
      fontWeight: "400",
      fontSize: 48,
      lineHeight: 56,
      letterSpacing: 0,
    },
    h4: {
      fontFamily,
      fontWeight: "400",
      fontSize: 34,
      lineHeight: 42,
      letterSpacing: 0.25,
    },
    h5: {
      fontFamily,
      fontWeight: "400",
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0,
    },
    h6: {
      fontFamily,
      fontWeight: "500",
      fontSize: 20,
      lineHeight: 32,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontFamily,
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontFamily,
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0.1,
    },
    body1: {
      fontFamily,
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily,
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    button: {
      fontFamily,
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 16,
      letterSpacing: 1.25,
    },
    caption: {
      fontFamily,
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily,
      fontWeight: "400",
      fontSize: 10,
      lineHeight: 16,
      letterSpacing: 1.5,
    },
  };
}
