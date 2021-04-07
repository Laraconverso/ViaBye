import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Items from './components/Items/Items'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Compra y vende ropa vintage en un solo lugar."/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
