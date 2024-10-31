import { createBrowserRouter } from "react-router-dom";

// Routes Import
import Home from "./routes/Home.jsx"
import About from "./routes/About.jsx";

const router = createBrowserRouter([
    Home,
    About,
])

export default router;