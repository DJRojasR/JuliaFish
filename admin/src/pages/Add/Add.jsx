import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div>
      <div className="add">
        <form className="flex-col">
          <div className="add-img-upload flex-col">
            <p>Subir imagen</p>
            <label htmlFor="image">
              <img src={assets.upload} alt="" />
            </label>
            <input type="file" id="image" hidden required />
          </div>
          <div className="add-product-name flex-col">
            <p>Nombre del producto</p>
            <input type="text" name="name" placeholder="Escribe aquí" />
          </div>
          <div className="add-product-description flex-col">
            <p>Descripción del producto</p>
            <textarea
              name="description"
              rows="6"
              placeholder="Escribe aquí"
              required
            ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Categoría</p>
              <select name="category" required>
                <option value="Ceviche">Ceviche</option>
                <option value="Chaufa">Chaufa</option>
                <option value="Sopas">Sopas</option>
                <option value="Causas">Causas</option>
                <option value="Chicharrones">Chicharrones</option>
                <option value="Cocteles">Cocteles</option>
                <option value="Arroces">Arroces</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Price</p>
              <input
                type="number"
                name="price"
                placeholder="Escribe aquí"
                required
              />
            </div>
          </div>

          <button type="submit" className="add-btn">
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
