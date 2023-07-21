import React from 'react';
import { products } from '../../products/asyncMock';
import './Home.css';
import Item from '../Item/Item';

export function Home () {
  return (
    <div>
      <h2 className='title'>Las mejores platas estan aqui</h2>
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

