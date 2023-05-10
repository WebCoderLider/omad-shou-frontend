import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Admin from './Components/Admin/Admin'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
