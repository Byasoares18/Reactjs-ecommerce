import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import {}from "../components/context/CartContext";




const ItemDetail = ({ id, name, img, price, stock, addItem }) => {

  const[quantityAdded,setQuantityAdded] = useState (0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded (quantity)

    const item = {
      id,name,price,
    };
    addItem (item, quantity)
  };

return (
          <article className='CardItem'>
              <header className='Header'>
                  <h2 className='ItemHeader'>
                      {name}
                  </h2>
              </header>
              <picture>
                <img src={img} alt={name} className="ItemImg" />
              </picture>
            <section>
                  <p className='Info'>
                      Precio: ${price}
                  </p>
                  <p className='Info'>
                      Stock disponibles: {stock}
                  </p>
            </section>
            <footer className='ItemFooter'>
          { 
              quantityAdded > 0? (
                <Link to= '/cart' className="Option">Terminar compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd) => console.log('cantidad agregada', quantity)} />
              )
                
            
          }
          </footer>
        </article>
    );
};


export default ItemDetail;
