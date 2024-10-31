// Pages
import Home from "../pages/Home.jsx"

// Components
import Template from "../components/Template.jsx"

const Route = {
    path: "/",
    element: <Template />,
    children: [
        {
            index: true,
            element: <Home />
        }
    ]
}

export default Route;