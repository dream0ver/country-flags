import React, { useEffect, useState } from "react"
import FlagCard from "./Components/FlagCard"
import { FlagCardType } from "./types"
import { fetchAllCountries, fetchCountriesByName } from "./util/apiManager"
import { useDebounce } from "./hooks/useDebounce"

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [flags, setFlags] = useState<FlagCardType[]>([])
  const [search, setSearch] = useState<string>("")
  const debouncedSearch = useDebounce(search)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  useEffect(() => {
    search
      ? fetchCountriesByName(setLoading, setFlags, search)
      : fetchAllCountries(setLoading, setFlags)
  }, [debouncedSearch])

  const renderFlags = () =>
    flags.map((flag, idx) => <FlagCard key={idx} flag={flag} />)
  return (
    <>
      <input
        autoComplete="of"
        className="search-box"
        placeholder="Search for the country..."
        onChange={onSearch}
      />
      <div className="flag-grid">{loading ? "Loading..." : renderFlags()}</div>
    </>
  )
}

export default App
