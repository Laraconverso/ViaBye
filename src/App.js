import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
