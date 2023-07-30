export type FlagCardType = {
  name: {
    common: string
    official: string
  }
  flags: {
    png?: string
    svg?: string
  }
  population: number
  region: string
  capital: string[]
}
export type ThemeType = "light-theme" | "dark-theme"

export type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}
