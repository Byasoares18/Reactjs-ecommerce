import React, { useState, useEffect } from "react";
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

    
    const collectionRef = categoryId
    ?query(collection(db, 'items'), where('category', '==', categoryId))
    : collection(db,'items')

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
  
        setProducts(productsAdapted);
        
      })
      .catch((error) => {
        console.log(error);
        
      })
      .finally(()=>{
        setLoading(false)
      })
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


