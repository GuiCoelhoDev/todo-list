import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    font-family: 'Lato', sans-serif;
}


html {
  font-size: 62.5%;
  p{
      font-size: 1.6rem;
  }

  label{
    font-size: 1.6rem;
  }

  li {
    font-size: 1.6rem;
  }
  
}


`;

export default GlobalStyle;
