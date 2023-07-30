import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound  from './components/NotFound/NotFound';
import { Home } from '../src/Home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { CartProvider } from './context/CartContext';

import AddProducts from './components/addProducts/addProducts';

function App() {
  return (

    <div className= "App">

      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/addproducts" component={AddProducts} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

