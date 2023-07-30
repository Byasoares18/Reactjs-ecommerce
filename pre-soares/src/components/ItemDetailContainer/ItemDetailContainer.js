  

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { itemId } = useParams();

  const addItem = (item, quantity) => {
    if (item.stock >= quantity) {
      const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

      if (itemInCart) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...item, quantity }]);
      }

      console.log('Item adicionado ao carrinho:', item, 'quantidade:', quantity);
    } else {
      console.log('Quantidade solicitada indisponível em estoque.');
    }
  };

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
      <ItemDetail
        id={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        stock={product.stock}
        addItem={addItem}
      />
      
    </div>
  );
};

export default ItemDetailContainer;
