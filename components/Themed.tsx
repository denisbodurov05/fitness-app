/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { useTheme } from "@/providers";
import { Text as DefaultText, View as DefaultView } from "react-native";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: "text" | "background"
) {
  const { theme, mode } = useTheme();
  const colorFromProps = props[mode];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    // Map the old color names to new theme structure
    switch (colorName) {
      case "text":
        return theme.secondary.darker;
      case "background":
        return theme.secondary.lighter;
      default:
        return theme.secondary.darker;
    }
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
