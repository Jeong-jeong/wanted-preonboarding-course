import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GNB } from '@components/common'

const Router = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default Router
