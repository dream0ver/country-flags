import React from "react"
import { ThemeType, ThemeContextType } from "../types"
const INITIAL_STATE = {
  theme: "light-theme",
  toggleTheme: () => {},
}
export const ThemeContext = React.createContext<ThemeContextType>(INITIAL_STATE)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<ThemeType>("light-theme")
  const toggleTheme = () => {
    setTheme(prev => (prev == "light-theme" ? "dark-theme" : "light-theme"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
