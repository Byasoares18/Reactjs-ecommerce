
import React, { useState, useEffect } from "react";
import { getAllProducts, getProductsByCategory } from "../../products/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getAllProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
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
          return { id: doc.id, ...data }; // Fix here: Change doc.data to doc.id
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Carregando...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

// import React, { useState, useEffect } from "react";
// import { getAllProducts, getProductsByCategory } from "../../products/asyncMock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "../../service/firebase/firebaseConfig";

// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   const { categoryId } = useParams()

//     useEffect(() => {
//       const asyncFunc = categoryId ? getProductsByCategory : getAllProducts

//        asyncFunc (categoryId)
//       .then (Response =>{
//         setProducts(Response)
//        })
//       .catch (error =>{
//          console.error(error)
//        })
//      }, [categoryId])
//         useEffect (() => {
//           setLoading (true)

//           const collectionRef = categoryId
//           ? query ( collection(db, 'products'), where ('category', '==', categoryId))
//           : collection(db, 'products')

//         getDocs (collectionRef)
//           .then (response =>{
//             const productsAdapted = response.docs.map(doc => {
//               const data = doc.data()
//               return {id: doc.data}
//             })
//             setProducts (productsAdapted)
//           })
//           .catch (error =>{
//             console.log (error)
//           })
//           .finally (() => {
//             setLoading (false)
//           })  
//         })
  

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;
