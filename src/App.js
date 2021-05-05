import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home';
import Sell from './components/Sell/Sell';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {Cart}  from './components/Cart/Cart';
import Footer from './components/Footer/Footer.js';
import {CartProvider} from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/Home" exact component={Home}/>
            <Route path="/Sell" exact component={Sell}/>
            <Route exact path="/">
                <ItemListContainer ProductosDisponibles={"Productos Disponibles"} />
            </Route>
            <Route path="/product/:id" exact component={ItemDetailContainer} />
            <Route path="/category/:categoryId" exact component={ItemListContainer}/>
            <Route path="/Cart" exact component={Cart}/>
            <Route path="/Checkout" exact component={Checkout}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
