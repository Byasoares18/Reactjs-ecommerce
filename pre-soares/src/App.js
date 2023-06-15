import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemLitContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting={'Bienvenido a mi tienda'}/>
      
    </div>
  );
}

export default App;
