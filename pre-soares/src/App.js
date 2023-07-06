import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <BrowserRouter className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element ={<ItemListContainer  />}/>
      <Route path='/category/:categoryId' element ={ <ItemListContainer greeting='Bienvenido a mi tienda'/>}/>
      <Route path='*' element= {<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
