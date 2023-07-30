import { useNavigate } from "react-router-dom"
import { FlagCardType } from "../types"

export default function FlagCard({ flag }: { flag: FlagCardType }) {
  const navigate = useNavigate()
  const handleClick = (country_name: string) =>
    navigate(`/details/${country_name}`)
  return (
    <div className="flag-card" onClick={() => handleClick(flag.name.official)}>
      <div className="img-container">
        <img src={flag.flags.svg} />
      </div>
      <div className="info-container">
        <h2>{flag.name.common}</h2>
        <p>
          <span>Population:&nbsp;</span>
          {flag.population}
        </p>
        <p>
          <span>Region:&nbsp;</span>
          {flag.region}
        </p>
        <p>
          <span>Capital:&nbsp;</span>
          {flag.capital?.join(",")}
        </p>
      </div>
    </div>
  )
}
