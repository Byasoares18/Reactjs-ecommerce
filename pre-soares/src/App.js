
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import ItemCount from './components/ItemCount/ItemCount';




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a mi tienda"  />} /> 
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a mi tienda"   />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
      </div>
    </Router>
  );
}

export default App;
