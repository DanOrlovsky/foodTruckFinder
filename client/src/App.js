import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Base from './Components/Base';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import Auth from './Modules/Auth';

injectTapEventPlugin();

class App extends Component {
  state = {
    isAuthenticated: false,
  }
  componentDidMount() {
    this.userAuthChanged();
  }

  userAuthChanged = () => {
    this.setState({ isAuthenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
        <Router>
          <Switch>
            <Base 
              isAuthenticated={ this.state.isAuthenticated }
              userAuthChanged={this.userAuthChanged } >
              <Route exact path='/' component={ HomePage } />
              <Route exact path='/login' render={ ()=> <LoginPage isAuthenticated={this.state.isAuthenticated } 
                                                                  userAuthChanged={this.userAuthChanged }/>} />
              <Route exact path='/signup' component={SignUpPage} />
              <Route exact path="/dashboard" render={ () => <DashboardPage isAuthenticated={ this.state.isAuthenticated }/> } />
            </Base>
          </Switch>
        </Router>
      
    );
  }
}

export default App;
