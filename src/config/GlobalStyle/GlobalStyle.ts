import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      font-family: 'Noto Sans', sans-serif;
      box-sizing: border-box;
  }

  input {
    border: 0;
  }
  button {
      cursor: pointer;
      font-family: 'Noto Sans', sans-serif;
      border: 0;
  }
  a {
      text-decoration:none;
  
  }
`;
export default GlobalStyle;
