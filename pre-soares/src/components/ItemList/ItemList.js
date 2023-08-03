import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";


const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map((product) => (
        <div key={product.id} className="item">
          <Item {...product} />
          <br />
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;
