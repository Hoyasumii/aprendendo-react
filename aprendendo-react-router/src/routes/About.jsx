// Pages
import About from "../pages/About.jsx";

// Components
import Template from "../components/Template.jsx";

const Route = {
    path: "/about",
    element: <Template />,
    children: [
        {
            index: true,
            element: <About />
        }
    ]
}

export default Route;