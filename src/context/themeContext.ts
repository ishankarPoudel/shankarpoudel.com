import { createContext } from "react";

interface ThemeContextValue {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  darkMode: true,
  toggleDarkMode: () => {},
});
