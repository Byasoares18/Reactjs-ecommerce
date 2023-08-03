import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(db, 'items', itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ItemDetailContainer'>
      {product.stock > 0 ? (
         <ItemDetail product={product} addItem={addItem} />
         
      ) : (
        <p>Producto agotado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

