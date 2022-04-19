import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
             <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/*Essa é a Route Principal, /*/}
          <Route path="/">
            <Header/>
            <h1>Home</h1>

          </Route>
        </Switch>
      </div>
    </Router>
  );
/*{
  Precisamos usar React-Router
}

  localhost.com
}

{
{
  localhost.com/checkout
}

{
  localhost.com/login
}*/

}

export default App;
