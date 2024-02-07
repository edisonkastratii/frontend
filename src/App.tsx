import React from 'react';
import './App.css';
import { Navbar } from './navbarandfooter/Navbar';
import { Route, Switch } from 'react-router-dom';
import Register from './signinorlogin/Register';
import Login from './signinorlogin/Login';
import Contact from './layout/Contact';
import Notification from './layout/Notification';
import Favorites from './layout/Favorites';
import Vehicle from './vehicles/Vehicle';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/vehicle'>
          <Vehicle/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/notification'>
          <Notification/>
        </Route>
        <Route path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
