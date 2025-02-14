import React from 'react'
import Navabar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    //Creamos un div con la clase app y Agregamos el componente Navabar
    <div className='app'>
      <Navabar/>
      <Routes>
        {/* Creamos una ruta con el path / y el componente Home */}
        <Route path='/' element={<Home/>}/>
        {/* Creamos una ruta con el path /cart y el componente Cart */}
        <Route path='/cart' element={<Cart/>}/>
        {/* Creamos una ruta con el path /placeorder y el componente PlaceOrder */}
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App