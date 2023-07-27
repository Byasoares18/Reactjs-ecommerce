// import React, { useState, useEffect } from "react";
// import { getProductById } from "../../products/asyncMock";
// import { useParams } from "react-router-dom";
// import ItemDetail from "../ItemDetail/ItemDetail";
// // import ItemCount from "../ItemCount/ItemCount";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../service/firebase/firebaseConfig";


// export const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);
//   const [loading,setLoading] = useState (true)

//   const { itemId } = useParams();
//   const addItem = (item, quantity) => {
//     console.log("Item agregado:", item, "cantidad:", quantity);
//   };

//   useEffect(() =>{
//     setLoading(false)
//     const docRef = doc(db, 'products', itemId) 

//     getDoc(docRef)
//       .then (response =>{
//         const data = response.data()
//         const productsAdapted = { id: response.id, ...data}
//         setProduct (productsAdapted)
//       })
//       .catch (error =>{
//         console.log(error)
//       })
//       .finally(()=>{
//         setLoading(false)
//       })
//   }, [itemId])

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await getProductById(itemId);
//         setProduct(response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProduct();
//   }, [itemId]);

//   if (!product) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div className="ItemDetailContainer">
//       <ItemDetail
//         id={product.id}
//         name={product.name}
//         img={product.img}
//         price={product.price}
//         stock={product.stock}
//         addItem={addItem}
//       />
//       {/* <ItemCount
//         stock={product.stock}
//         initial={1}
//         onAdd={(quantity) => addItem(product, quantity)}
//       /> */}
//     </div>
//   );
// };

// export default ItemDetailContainer;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  const addItem = (item, quantity) => {
    console.log('Item agregado:', item, 'cantidad:', quantity);
  };

  useEffect(() => {
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProduct(productsAdapted);
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
