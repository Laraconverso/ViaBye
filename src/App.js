import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home';
import Sell from './components/Sell/Sell';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail'
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
          <Route path="/" exact component={ItemListContainer}/>
          <Route path="/allItems/:id" exact component={ItemListContainer}/>
          <Route path="/item/:id" exact component={ItemDetail}/>
          <Route path="/Cart" exact component={Cart}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
