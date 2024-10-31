// Components
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Template() {
    return (
        <>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}