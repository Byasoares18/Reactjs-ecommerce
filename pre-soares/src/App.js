import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemLitContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting={'Platas de qualidad'}/>
    </div>
  );
}

export default App;
