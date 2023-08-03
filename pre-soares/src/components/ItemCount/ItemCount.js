

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial, item }) => {
  const [quantity, setQuantity] = useState(initial);
  const { addItem } = useContext(CartContext);

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

  const handleAddToCart = () => {
    addItem(item, quantity); // Chame a função addItem passando o item completo e a quantidade selecionada
  };

  return (
    <div className="Counter">
      {stock > 0 ? (
        <>
          <div className="Controls">
            <button className="Button" onClick={decrement}>
              -
            </button>
            <h4 className="Number">{quantity}</h4>
            <button className="Button" onClick={increment}>
              +
            </button>
          </div>
          <button
            className="Button"
            onClick={handleAddToCart} // Chame a função handleAddToCart quando o usuário clicar em "Adicionar ao Carrinho"
            disabled={quantity === 0}
          >
            Agregar al Carrito
          </button>
        </>
      ) : (
        <p className="OutOfStockMessage">Producto agotado</p>
      )}
    </div>
  );
};

export default ItemCount;

