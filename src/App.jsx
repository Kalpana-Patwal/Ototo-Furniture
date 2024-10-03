import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Category from './Component/Category/Category'
import Furniture from './Component/Furnitures/Furniture'
import Products from './Component/Products/Products'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Furniture/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
