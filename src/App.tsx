import React from 'react'
// import logo from './logo.svg';

import PageContainer from './pages/PageContainer/PageContainer'
import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )

  // return <CartPage />
}

export default App
