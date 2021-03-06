import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from './component/pages/Index';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Profile from './component/pages/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />      
      </Switch>
    </div>
  );
}

export default App;
