import React from "react";

const ItemDetail = ({ id, name, price, img, stock }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ItemDetail;
