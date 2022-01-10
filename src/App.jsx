import React from 'react'
import '@style/font.css'
import Router from '@router/Router'
import { GlobalStyle } from '@style/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
