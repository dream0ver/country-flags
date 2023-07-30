import { Outlet, createBrowserRouter } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Routes from "./Routes"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Body = () => (
  <div className="app-body app-padding">
    <Outlet />
  </div>
)

const Layout = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: Routes,
  },
])

export default Router
