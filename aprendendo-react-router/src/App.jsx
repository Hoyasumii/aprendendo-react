// React Import
import { useEffect } from "react"

// Components
import { RouterProvider } from "react-router-dom"

// Router
import router from "./router.jsx"

function App() {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return <RouterProvider router={ router } />
}

export default App
