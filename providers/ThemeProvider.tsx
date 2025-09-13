import { useColorScheme } from "@/hooks/useColorScheme";
import { createPalette } from "@/themes/palette";
import { createTypography } from "@/themes/typography";
import { Theme, ThemeMode } from "@/types/theme";
import React, { createContext, ReactNode, useContext, useMemo } from "react";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// TODO Create ConfigProvider for i18n and other global settings
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const mode = colorScheme === "dark" ? ThemeMode.DARK : ThemeMode.LIGHT;

  const palette = useMemo(() => createPalette(mode), [mode]);
  const typography = useMemo(() => createTypography(mode), [mode]);

  const theme: Theme = useMemo(
    () => ({
      mode,
      palette,
      typography,
    }),
    [mode, palette, typography]
  );

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
