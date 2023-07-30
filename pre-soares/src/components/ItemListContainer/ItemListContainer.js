import React, { useState, useEffect } from "react";
import { getAllProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Cart from "../cart/Cart";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryId ? getProductsByCategory : getAllProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setLoading(false); // Add this line to set loading to false after fetching data
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Add this line to set loading to false in case of an error
      });
  }, [categoryId]);

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
        setLoading(false); // Add this line to set loading to false after fetching data
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Add this line to set loading to false in case of an error
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Carregando...</p> : <ItemList products={products} />}
      <Cart/>
    </div>
  );
};

export default ItemListContainer;


