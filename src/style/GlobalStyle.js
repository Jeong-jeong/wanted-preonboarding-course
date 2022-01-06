import { Global, css } from '@emotion/react'
const ResetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    display: inline-block;
  }

  button {
    background-color: transparent;
    border: none;
  }
`

export const GlobalStyle = () => <Global styles={ResetCss} />
