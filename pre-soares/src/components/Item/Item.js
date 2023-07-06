// import './Item.css'

// const Item = ({id, name ,img , price, stock}) => {

//     return (
//         <article className='CardItem' >
//             <header className='Header' >
//                 <h2 className='ItemHeader' >
//                     {name}
//                 </h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className= "ItemImg"/>    
//             </picture>
//             <section>
//                 <p className='Info' >
//                     Precio: ${price}
//                 </p>
//                 <p className='Info'>
//                     Stock disponibles: {stock}
//                 </p>
//             </section>
//             <footer className='ItemFooter' >
//                 <button className='Option' > Ver detalle</button>
//             </footer>


//         </article>
//     )
// }  

// export default Item

 import './Item.css'

 const Item = ({ id, name, img, price, stock }) => {
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
                  <button className='Option'>Ver detalle</button>
             </footer>
         </article>
     )
  }

export default Item

// import React from "react";

// const Item = ({ id, name, price, img, stock }) => {
//   return (
//     <div>
//       <img src={img} alt={name} />
//       <h2>{name}</h2>
//       <p>Price: ${price}</p>
//       <p>Stock: {stock}</p>
//     </div>
//   );
// };

// export default Item;
