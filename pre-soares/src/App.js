import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemLitContainer';
import { CartWidget } from './components/CartWidget/CartWidget.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting={'Platas de qualidad'}/>
      <CartWidget/>
    </div>
  );
}

export default App;
