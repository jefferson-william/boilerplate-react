import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    outline: 0;
    margin: 0;
  }
  html {
    display: table;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
  .fa,
  .fal,
  .far,
  .fab,
  .fas {
    font-weight: normal;
    font-size: 24px;
  }
  .fa,
  .fal {
    font-weight: 600;
    font-family: 'Font Awesome Light Regular', sans-serif;
  }
  .fas,
  .far {
    font-family: 'Font Awesome Solid Regular', sans-serif;
  }
  .fab {
    font-family: 'Font Awesome Brands Regular', sans-serif;
  }
  .container {
    max-width: 1200px;
    padding: 0 16px;
    margin: 0 auto;
  }
`
