import React, {Component} from "react";
import Auth from '../../Modules/Auth';
import { Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  state = {
    isOpen: false,
  }
  
  logOut = event => {
    event.preventDefault();
    Auth.deauthenticateUser();
    this.props.userAuthChanged();
    return ( <Redirect to="/" /> );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto navbar-push" navbar>
          { this.props.isAuthenticated ? (
            <div>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout" onClick={ this.logOut }>Logout</NavLink>
              </NavItem>
            </div>
          ) : (
            <div>
              <NavItem>
                <NavLink 
                  href="/login">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            </div>
          )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}