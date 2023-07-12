

import React, { useState, useEffect } from "react";
import { getProductById } from "../../products/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(itemId);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail
        id={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        stock={product.stock}
      />
    </div>
  );
};

export default ItemDetailContainer;
