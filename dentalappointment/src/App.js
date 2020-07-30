import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Calendar from './components/calendar.jsx';

import Login from './views/login/login.jsx';


function App() {
  return(
    <div>
      <Router> 
          <Switch>
              <Route path="/login" exact component={Login} />
          </Switch>
      </Router>
    </div>
);
  }

export default App;