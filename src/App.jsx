import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) 

    return () => clearTimeout(timer) 
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App