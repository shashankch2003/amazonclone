import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" />
          <Login />
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}


export default App;
 
