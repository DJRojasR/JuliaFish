import React, { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titulo</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Agregamos un map para recorrer la lista de comida y agregar los items al carrito */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item"  key={item._id} >
                <img src={url +"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>S/.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>S/.{cartItems[item._id] * item.price}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>S/.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>S/.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes un  codigo de promocion, ingresa aqui</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart