import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img src={product.img} alt={product.name} className="item-img" />
      <div className="item-info">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Item ID: {product.id}</p> 
      </div>
    </div>
  );
};

export default CartItem;

