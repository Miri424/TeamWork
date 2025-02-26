import {Routes, Route} from "react-router-dom"
import About from "../pages/Client/about"
import Home from "../pages/Client/home/Home"
import ClientLayout from "../pages/Client"

const RouterApp = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path={"about"} element={<About />} />
            </Route>
        </Routes>
    </div>
  )
}

export default RouterApp