import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Users from "../pages/Users"

const Rotas = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
    </Routes>
)

export default Rotas