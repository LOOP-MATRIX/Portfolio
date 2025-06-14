import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}

export default App