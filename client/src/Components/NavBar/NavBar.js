import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../../Modules/Auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
     super(props);

   this.toggle = this.toggle.bind(this);
  }

  state = {
    isOpen: false,
    isAuthenticated: false
  }
  componentDidMount() {
    this.setState({ isAuthenticated: Auth.isUserAuthenticated() });
  }

  logOut = event => {
    event.preventDefault();
    Auth.deauthenticateUser();
    this.setState({ isAuthenticated: false });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { this.state.isAuthenticated ? (
              <div>
                <NavItem>
                  <NavLink href="/api/dashboard">User</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout" onClick={ this.logOut }>Logout</NavLink>
                </NavItem>
              </div>
            ) : (
              <div>
                <NavItem>
                  <NavLink href="/login">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavItem>
              </div>
            )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}