import React from 'react'
import '@style/font.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '@style/GlobalStyle'
import { MainBar } from '@components/domain'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <MainBar />
    </>
  )
}

export default App
