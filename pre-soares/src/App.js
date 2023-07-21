import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

