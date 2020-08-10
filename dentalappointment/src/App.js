import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Login from './views/login/login.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Page404 from './views/404/404.jsx';
import AboutUs from './views/about/about.jsx'
import AskExp from './views/askExp/askExp.jsx';
import ContactMail from './views/contactUs/contactUs.jsx';
import ForgotPass from './views/forgotPass/forgotPass.jsx';
import Profile from './views/profile/profile.jsx';
import Logout from './views/logout/logout.jsx';
import Agenda from './components/agenda/agenda.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/access' exact component={AskExp} />
        <Route path='/contactMail' exact component={ContactMail} />
        <Route path='/forgotPass' exact component={ForgotPass} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/agenda' exact component={Agenda} />

        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;