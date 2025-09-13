import { ThemeMode } from "@/types/theme";
import DarkTheme from "./dark";
import LightTheme from "./light";

export default function Theme(mode: ThemeMode) {
  return mode === "dark" ? DarkTheme() : LightTheme();
}
