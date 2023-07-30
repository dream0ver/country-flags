import { useState, useEffect } from "react"
const DELAY = 1000
export const useDebounce = (term: string): string => {
  const [state, setState] = useState<string>(term)
  useEffect(() => {
    const timeout = setTimeout(() => setState(term), DELAY)
    return () => clearTimeout(timeout)
  }, [term])
  return state
}
