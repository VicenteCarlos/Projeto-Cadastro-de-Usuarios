import styled from "styled-components"

export const DivApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-rows: 100px 1fr 40px;
  grid-template-areas: 
    "logo header"
    "menu content"
    "menu footer"
  ;
  background-color: #F5F5F5;
  
   .logo {
    grid-area: logo;
  }

   .header {
    grid-area: header;
  }

   .menu-area {
    grid-area: menu;
  }

   .content {
    grid-area: content;
  }

   .footer {
    grid-area: footer;
  }
`