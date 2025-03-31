import React, {useContext, useState } from "react";
//import { useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount,token, food_list,cartItems,url } = useContext(StoreContext);
    const[data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
    }) 
    const onChangeHandler = (event) => { 
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data, [name]: value})) //actualizamos el estado
    }

    /*useEffect(() => {
      console.log(data);
    }, [data])*/

    //Creamos un placeOrder para enviar la orden al backend
    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item) => {
        if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      console.log(orderItems);
    }

  return (
    /*Campos para el pedido*/
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          {/*Campos para el nombre y apellido onchange para actualizar el estado*/}
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input name='zipCode' onChange={onChangeHandler} value={data.zipCode} type="text" placeholder="Zip Code" />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>S/.{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                S/.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
