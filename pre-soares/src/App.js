import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemLitContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting={'Bienvenido a mi tienda'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
    </div>
  );
}

export default App;
