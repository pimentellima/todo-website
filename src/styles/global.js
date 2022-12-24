import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #ecf1f8;
    -webkit-font-smoothing: antialiased !important;
  }
`;