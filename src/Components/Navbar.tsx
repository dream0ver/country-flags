import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <nav className="header-nav app-padding">
      <h1>Where in the world?</h1>
      <span style={{ cursor: "pointer" }} onClick={toggleTheme}>
        {theme == "light-theme" ? "Dark Mode" : "Light Mode"}
      </span>
    </nav>
  )
}
