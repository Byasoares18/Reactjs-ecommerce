import React from "react";

const ItemDetail = ({ product }) => {
  if (!product){
    return <div> Loading...</div>
  }
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ItemDetail;
