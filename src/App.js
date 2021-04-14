import './App.css';
import { Route ,BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/ItemListContainer" exact component={ItemListContainer}/>
          <Route path="/ItemDetailContainer" component={ItemDetailContainer} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
