import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@pages'
import { GNB } from '@components/common'

const Router = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
