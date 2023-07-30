import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCountriesByName } from "../util/apiManager"

export default function Details() {
  const { id = "" } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [country, setCountry] = useState<any[]>([])

  useEffect(() => {
    fetchCountriesByName(setLoading, setCountry, id, false)
  }, [id])

  const flag = country[0]
  console.log(flag)
  const navigate = useNavigate()
  const onBack = () => navigate("/")
  const renderDetails = () => (
    <div>
      <button className="btn-primary back-button" onClick={onBack}>
        Back
      </button>
      <div className="details-page">
        <div className="img-container">
          <img src={flag.flags.svg} />
        </div>
        <div className="info">
          <h1>{flag.name.common}</h1>
          <div className="details-grid">
            <p>
              <span>Official Name:&nbsp;</span>
              {flag.name.official}
            </p>
            <p>
              <span>Top Level Domain:&nbsp;</span>
              {flag?.tld?.join(",")}
            </p>
            <p>
              <span>Population:&nbsp;</span>
              {flag.population}
            </p>
            <p>
              <span>Currencies:&nbsp;</span>
              {Object.keys(flag?.currencies)?.join(",")}
            </p>
            <p>
              <span>Region:&nbsp;</span>
              {flag.region}
            </p>
            <p>
              <span>Languages:&nbsp;</span>
              {Object.values(flag?.languages)?.join(",")}
            </p>
            <p>
              <span>Sub Region:&nbsp;</span>
              {flag.subregion}
            </p>
            <p>
              <span>Continent:&nbsp;</span>
              {flag.continents?.join(",")}
            </p>
            <p>
              <span>Capital:&nbsp;</span>
              {flag?.capital?.join(",")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return <>{loading ? "Loading..." : renderDetails()}</>
}
