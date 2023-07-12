import React from 'react';
import { products } from '../../products/asyncMock';
import './Home.css';

const Home = () => {
    return (
      <div>
        <h1>Bienvenido a mi tienda</h1>
        <div>
          {products.map((product) => (
            <img key={product.id} src={product.img} alt={product.name} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
