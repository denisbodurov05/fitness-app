import { useColorScheme } from "@/hooks/useColorScheme";
import { createPalette } from "@/themes/palette";
import { Theme, ThemeMode } from "@/types/theme";
import React, { createContext, ReactNode, useContext } from "react";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const mode = colorScheme === "dark" ? ThemeMode.DARK : ThemeMode.LIGHT;
  const palette = createPalette(mode);

  const theme: Theme = {
    ...palette,
    mode,
  };

  const value = {
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
