export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export interface ColorPalette {
  lighter: string;
  100: string;
  200: string;
  light: string;
  400: string;
  main: string;
  dark: string;
  700: string;
  darker: string;
  900: string;
  contrastText: string;
}

export interface SecondaryColorPalette {
  lighter: string;
  100: string;
  200: string;
  light: string;
  400: string;
  500: string;
  main: string;
  dark: string;
  800: string;
  darker: string;
  contrastText: string;
}

export interface SimpleColorPalette {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

export interface PaletteThemeProps {
  primary: ColorPalette;
  secondary: SecondaryColorPalette;
  error: SimpleColorPalette;
  warning: SimpleColorPalette;
  info: SimpleColorPalette;
  success: SimpleColorPalette;
}

export interface Theme extends PaletteThemeProps {
  mode: ThemeMode;
}
