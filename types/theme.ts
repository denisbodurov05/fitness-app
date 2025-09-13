export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export interface PrimaryColorPalette {
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
}

export interface SimpleColorPalette {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface TextPalette {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface BackgroundPalette {
  default: string;
}

export interface BasePaletteProps {
  primary: PrimaryColorPalette;
  secondary: SecondaryColorPalette;
  error: SimpleColorPalette;
  warning: SimpleColorPalette;
  info: SimpleColorPalette;
  success: SimpleColorPalette;
}

export interface PaletteThemeProps extends BasePaletteProps {
  text: TextPalette;
  background: BackgroundPalette;
}

export interface Theme {
  mode: ThemeMode;
  palette: PaletteThemeProps;
}
