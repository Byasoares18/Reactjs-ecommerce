

import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>-</button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>+</button>
      </div>

      <button className="Button" onClick={handleAdd} disabled={stock === 0}> Agregar al carrito
      </button>
      
    </div>
  );
};

export default ItemCount;
