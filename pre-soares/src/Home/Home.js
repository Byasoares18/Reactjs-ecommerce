import React from 'react';
import { products } from '../data/asyncMock';
import './Home.css';
import Item from '../components/Item/Item';

function Home () {
  return (
    <div>
      <h2 className='title'>Todos nuestros productos</h2>
      <div className="grid-container">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <Item {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home