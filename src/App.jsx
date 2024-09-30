import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Category from './Component/Category/Category'
import Furniture from './Component/Furnitures/Furniture'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Furniture/>
    </div>
  )
}

export default App
