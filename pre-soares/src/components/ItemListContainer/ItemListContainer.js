// import { useState, useEffect } from "react"
// import { getProduts, getProductsByCategory } from "../../asyncMock";
// import ItemList from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"




// const ItemListContainer = ({greeting}) => {
//     const [products, setProducts] = useState ([])
//     const { categoryId } = useParams ()

//     useEffect (() => {
//         const asyncFun = categoryId ? getProductsByCategory : getProduts

//         asyncFun(categoryId)
//             .then(response =>{
//                 setProducts(response)
//             })
//             .catch(error => {
//         console.error(error)
//     })
// }, [categoryId])
    
//     return (
//         <>
//         <h1>{greeting}</h1>
//         <ItemList products ={products}/>
//         </>
//     )
// }



// export default ItemListContainer


// import { useState, useEffect } from "react"
// import { getProductsByCategory } from "../../asyncMock";
// import ItemList from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"

// const ItemListContainer = ({greeting}) => {
//     const [products, setProducts] = useState([])
//     const { categoryId } = useParams()

//     useEffect(() => {
//         const asyncFun = categoryId ? getProductsByCategory : getProductsByCategory

//         asyncFun(categoryId)
//             .then(response => {
//                 setProducts(response)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }, [categoryId])

//     return (
//         <>
//             <h1>{greeting}</h1>
//             <ItemList products={products} />
//         </>
//     )
// }

// export default ItemListContainer


// import React, { useState, useEffect } from "react";
// import { getProductsByCategory } from "../../asyncMock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = () => {
//   const [products, setProducts] = useState([]);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getProductsByCategory(categoryId);
//         setProducts(response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, [categoryId]);

//   return (
//     <div>
//       <h1>Meu Carrinho de Compras</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;



import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsByCategory(categoryId);
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
