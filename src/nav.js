import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import userServices from './Services/UserServices';
import {Button} from 'reactstrap'

function nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link style={{color:'white'}} className="navbar-brand" to={"/sign-in"}>BOOK REVIEW CENTRE</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            {!userServices.isLoggedIn() ? <>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul> </> : <Button onClick={e=>{
              userServices.logout();
                window.location.href="/sign-in"
            }}>Logout {userServices.getLoggedInUser()}</Button>}
          </div>
        </div>
      </nav>
    )}
    export default nav