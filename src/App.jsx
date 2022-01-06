import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '@style/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <button>hi</button>
    </>
  )
}

export default App
