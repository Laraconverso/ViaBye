import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home';
import Sell from './components/Sell/Sell';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Sell" exact component={Sell}/>
          <Route exact path="/">
              <ItemListContainer geeating={"Productos Disponibles"} />
          </Route>
          <Route path="/product/:id" exact component={ItemDetailContainer} />
          <Route path="/category/:categoryId" exact component={ItemListContainer}/>
          <Route path="/Cart" exact component={Cart}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
