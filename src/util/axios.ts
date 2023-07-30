import axios from "axios"
const baseURL = "https://restcountries.com/v3.1"
const axiosInstance = axios.create({
  baseURL,
})
export default axiosInstance
