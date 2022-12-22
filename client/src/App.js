import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';

// components
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';

toast.configure()


function App() {
  const [isAuthenticated, setIsAuntheticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuntheticated(boolean);
  };
//check to see if user is still validated
  async function isAuth() {
    try {
      const response = await fetch ('http://localhost:5000/auth/is-verified',{
        method: 'GET',
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json()
      //set auth to true or false
      parseRes === true ? setIsAuntheticated(true) : setIsAuntheticated(false);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  },[]);
//switch routes, check if user is authenticated and redirect accordingly
  return (
    <Fragment>
      <Router>
        <div className="container">
          <BrowserRouter>
           < NavBar/>
            <Route exact path= '/' render={props => !isAuthenticated ? (<Landing {...props} />) : (<Redirect to='/dashboard' />)} />
            <Route exact path= '/login' render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to='/dashboard' />)} />      
            <Route exact path= '/register' render={props => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Redirect to='/login' />)} />
            <Route exact path= '/dashboard' render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to ='/login' />)} />
          </BrowserRouter>
        </div>
      </Router> 
    </Fragment>
  );
}

export default App;
