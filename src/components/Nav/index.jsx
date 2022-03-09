import {Link} from "react-router-dom"
import { Aside } from "./styled"

const Nav = (props) => {
    return (
        <Aside className="menu-area">
            <nav>
                <Link to="/">Início</Link>
                <Link to="/users">Usuários</Link>
            </nav>   
        </Aside>
    )
}

export default Nav

