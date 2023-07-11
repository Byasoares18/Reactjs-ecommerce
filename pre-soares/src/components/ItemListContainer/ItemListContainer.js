


// import React, { useState, useEffect } from "react";
// import { getProductsByCategory } from "../../products/asyncMock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = ({ greeting}) => {
//   const [products, setProducts] = useState([]);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
        
//         const response = await getProductsByCategory(categoryId);

        
//         const json = await fetch("../path/to/products.json");
//         const data = await json.json();

        
//         const filteredProducts = data.filter(
//           (product) => product.category === categoryId
//         );

//         setProducts(filteredProducts);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, [categoryId]);

//   return (
//     <div>
//         <h1>{greeting}</h1>
      
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;

import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../../products/asyncMock";
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

export default ItemListContainer