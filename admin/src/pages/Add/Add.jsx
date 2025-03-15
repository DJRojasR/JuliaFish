import React from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'

const Add = () => {
  return (
	<div className='add'>
    <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          
          <label htmlFor="image">
            <img src={assets.upload_area} alt="Upload" />
          </label>

          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product name</p>
            <input type="text" name='name' placeholder='Type here' required />
        </div>
        <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea name='description' rows="6" placeholder='Write content here' required />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select name='category'>
              <option value='Ceviche'>Ceviche</option>
              <option value='Chaufa'>Chaufa</option>
              <option value='Sopa'>Sopa</option>
              <option value='Causas'>Causas</option>
              <option value='Chicharrones'>Chicharrones</option>
              <option value='Cocteles'>Cocteles</option>
              <option value='Arroces'>Arroces</option>
              <option value='Bebidas'>Bebidas</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input type="number" name='price' placeholder='Type here' required />
          </div>
        </div>
        <button type='submit' className='add-button'>Add item</button>
    </form>
  </div>
  )
} 

export default Add