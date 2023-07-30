

import React from 'react';

const CartItem = ({ id, name, img, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={name} className="item-img" />
      <div className="item-info">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Item ID: {id}</p> 
      </div>
    </div>
  );
};

export default CartItem;

