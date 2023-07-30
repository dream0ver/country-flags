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
    setTheme(prev =>{
      if(prev == "light-theme"){
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
      }
      else{
        document.body.classList.add("light-theme")
        document.body.classList.remove("dark-theme")
      }
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
