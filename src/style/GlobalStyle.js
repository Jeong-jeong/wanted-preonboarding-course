import { Global, css } from '@emotion/react'
import font from '@assets/fonts'

const ResetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, 'Apple SD Gothic Neo', Helvetica, Arial,
      'Nanum Gothic', 'Malgun Gothic', sans-serif;
    ${font.base};
    height: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
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
    cursor: pointer;
  }
`

export const GlobalStyle = () => <Global styles={ResetCss} />
