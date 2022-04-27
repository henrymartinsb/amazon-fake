import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*Essa é a Route Principal, /*/}
          <Route path="/">
            <Header />
            <Home id="Home"/>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
