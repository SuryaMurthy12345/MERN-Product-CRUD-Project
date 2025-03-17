import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Form from './Form'
import Navbar from './Navbar'
import AddProduct from './AddProduct'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/addproduct" element={<AddProduct/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App