import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App