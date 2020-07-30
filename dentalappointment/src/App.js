import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './views/login/login.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Calendar from './components/calendar/calendar.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Calendar} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;