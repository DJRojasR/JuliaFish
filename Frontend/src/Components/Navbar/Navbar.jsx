import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
//Creanos un componente funcional llamado Navabar y tambien creamos un archivo css llamado Navabar.css
const Navabar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const{getTotalCartAmount}=useContext(StoreContext);
  return (
    //Creamos un div con la clase app y Agregamos el componente Navabar
    <div className="navbar">

      {/* Agregamos el logo de JuliaFish y un Link a la pagina principal */}
      <Link  to="/">
        <img src={assets.logo_juliaFish} alt="" className="logo" />
      </Link>
     
        {/* Creamos un ul con la clase navbar-menu (barra de navegación) */}
          <ul className="navbar-menu">
        {/* Creamos la lista de elementos de la barra de navgación cramos clases en la barra de navegacion */}
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
        {/* Creamos un div con la clase navbar-right */}
        <div className="navbar-right">

        {/* Agregamos el icono de búsqueda y el icono de la cesta de compras */}
        <img src={assets.search_icon} alt="" />

        {/* Agregamos un div con la clase navbar-search-icon */}
        <div className="navbar-search-icon">

          {/* Agregamos un icono de cesta de compras y un Link a la pagina de cesta de compras */}
          <Link to="/Cart">
              <img src={assets.basket_icon} alt="" />
          </Link>

          {/*y un div con la clase dot */}
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

          {/* Agregamos un botón con el texto sign in(lo traduce automaticamente a inciar seccion xdxdxd) */}
          <button onClick={() => setShowLogin(true)}>sign in</button>
     </div>
    </div>
  );
};

export default Navabar;

