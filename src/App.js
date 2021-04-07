import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/ItemCount/ItemCount.js'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Compra y vende ropa vintage en un solo lugar."/>
      <ItemCount/>
      <Footer/>
    </div>
  );
}

export default App;
