import React from 'react'
import '@style/font.css'
import Router from '@router/Router'
import { GlobalStyle } from '@style/GlobalStyle'
import { GNB } from '@components/common'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <GNB />
    </>
  )
}

export default App
