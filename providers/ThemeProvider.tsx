import { useColorScheme } from "@/hooks/useColorScheme";
import { Theme, ThemeMode } from "@/types/theme";
import React, { createContext, ReactNode, useContext } from "react";
import darkTheme from "../themes/DarkTheme";
import lightTheme from "../themes/LightTheme";

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const mode = colorScheme === "dark" ? ThemeMode.DARK : ThemeMode.LIGHT;

  const paletteTheme = mode === ThemeMode.DARK ? darkTheme() : lightTheme();

  const theme: Theme = {
    ...paletteTheme,
    mode,
  };

  const value = {
    theme,
    mode,
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
