import App from "../App"
import Details from "../Components/Details"

const Routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]
export default Routes
