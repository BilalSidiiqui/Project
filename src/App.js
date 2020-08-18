import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NavBar from "./nav";
import Products from './components/Product';
import Home from './components/home'


function App() {
  return (<Router>
    <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">
      <NavBar/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/Home"  >
              <Home/>
              </Route>
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;