import logo from "../../assets/img/logo-icon-512.png"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Logo = (props) => {
   return (
     <Container className="logo">
          <Link to="/">
               <img src={logo} alt="logo" width="100px"/>
          </Link>
     </Container>
   )
}

export default Logo

const Container = styled.aside`
     background-color: #122129;
     display: flex;
     justify-content: center;
     align-items: center;

     
     img {
        padding: 0 15px; /*padding na direita e esquerda*/
     }
`