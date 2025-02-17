import React, { useState } from "react";
import Navabar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
      <div className="app">
        <Navabar setShowLogin={setShowLogin}/>
        <Routes>
          {/* Creamos una ruta con el path / y el componente Home */}
          <Route path="/" element={<Home />} />
          {/* Creamos una ruta con el path /cart y el componente Cart */}
          <Route path="/cart" element={<Cart />} />
          {/* Creamos una ruta con el path /placeorder y el componente PlaceOrder */}
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
