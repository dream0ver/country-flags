import axios from "./axios"

const parseFlagResponse = (records: any[]) => {
  return records.map((record: any) => ({
    name: {
      common: record.name.common,
      official: record.name.official,
    },
    flags: {
      png: record.flags.png,
      svg: record.flags.svg,
    },
    population: record.population,
    region: record.region,
    capital: record.capital,
  }))
}

export const fetchAllCountries = (setLoading: any, setData: any) => {
  setLoading(true)
  axios
    .get("/all")
    .then(res =>
      setData(Array.isArray(res?.data) ? parseFlagResponse(res.data) : [])
    )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}

export const fetchCountriesByName = (
  setLoading: any,
  setData: any,
  search: string,
  shouldParse: boolean = true
) => {
  setLoading(true)
  axios
    .get("/name/" + search)
    .then(res =>
      setData(
        Array.isArray(res?.data)
          ? shouldParse
            ? parseFlagResponse(res.data)
            : res.data
          : []
      )
    )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}
