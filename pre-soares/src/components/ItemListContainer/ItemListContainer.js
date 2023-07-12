

import React, { useState, useEffect } from "react";
import { getAllProducts, getProductsByCategory } from "../../products/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (categoryId) {
          response = await getProductsByCategory(categoryId);
        } else {
          response = await getAllProducts();
        }
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
