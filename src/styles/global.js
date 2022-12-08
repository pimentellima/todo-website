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
  ul {
    list-style: none;
  }

  p {
    color: #101820;
  }

  body {
    background: #ecf1f8;
    color: #333;
  }
  body, input {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;