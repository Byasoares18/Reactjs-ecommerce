
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

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
