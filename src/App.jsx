import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';
import Furniture from './Component/Furnitures/Furniture';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';
import ShopNow from './Component/ShopNow/ShopNow';

const AppContent = () => {
  const location = useLocation();  

  return (
    <>
      <Routes>
      
        <Route path="/" element={<>
          <Navbar />  
          <Home />
        </>} />
        
       
        <Route path="/shopnow" element={<ShopNow />} />
      </Routes>

      {location.pathname === '/' && (
        <>
          <Category />
          <Furniture />
          <Products />
        </>
      )}

      
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent /> 
    </Router>
  );
}

export default App;
