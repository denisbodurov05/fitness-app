import { ThemeMode } from "@/types/theme";
import { alpha } from "./style";
import Theme from "./theme";

export function createPalette(mode: ThemeMode) {
  const paletteColor = Theme(mode);

  return {
    ...paletteColor,
    text: {
      primary:
        mode === ThemeMode.DARK
          ? alpha(paletteColor.secondary.darker!, 0.87)
          : paletteColor.secondary[800],
      secondary:
        mode === ThemeMode.DARK
          ? alpha(paletteColor.secondary.darker!, 0.45)
          : paletteColor.secondary.main,
      disabled:
        mode === ThemeMode.DARK
          ? alpha(paletteColor.secondary.darker!, 0.1)
          : paletteColor.secondary[400],
    },
    background: {
      default:
        mode === ThemeMode.LIGHT
          ? paletteColor.secondary[200]
          : paletteColor.secondary[100],
    },
  };
}
