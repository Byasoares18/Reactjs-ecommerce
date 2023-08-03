import React from "react";

import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ product }) => {
  const { name, img, price, stock } = product;
  

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponibles: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount stock={stock} initial={1} item={product} />
      </footer>
    </article>
  );
};

export default ItemDetail;

