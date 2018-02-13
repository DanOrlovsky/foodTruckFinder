import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Base from './Components/Base';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import { Button } from 'reactstrap';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      
        <Router>
          <Switch>
            <Base>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SignUpPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
            </Base>
          </Switch>
        </Router>
      
    );
  }
}

export default App;
