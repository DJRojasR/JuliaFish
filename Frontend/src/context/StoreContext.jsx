import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; //importamos los objetos de la lista de la comida

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  /*agregamos el estado de cartItems*/
  const[cartItems, setCartItems] = useState({});
  /*agregamos la funcion addToCart*/
  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }else{
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
}

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
};
  

  /*agregamos un useEffect para ver el estado de cartItems*/
  useEffect(() => {
    console.log(cartItems);
  },[cartItems])


  /*agregamos la funcion removeFromCart*/
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
