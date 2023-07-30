import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map((product) => (
        <div key={product.id} className="item">
          <Item {...product} />
          <br />
          <ItemCount stock={product.stock} initial={1} item={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

