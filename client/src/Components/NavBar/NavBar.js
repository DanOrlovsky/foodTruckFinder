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
        <NavbarBrand href="/"><img src="../ImagesC/FTF-logo_OneColor_Truck_Red.png" width="100%" padding="0.5rem, 0"/></NavbarBrand>
        <Nav>
          <NavItem className="justify-center">
            <NavLink href="/">
              <img src="../ImagesC/FTF_Logo_Red.png" className="logobox-words" width="100%"/>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className="mr-auto" >
          { this.props.isAuthenticated ? (
            <div>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout" onClick={ this.logOut }>Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/AboutUs">About FTF</NavLink>
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
              <NavItem>
                <NavLink 
                  href="/AboutUs">About FTF</NavLink>
              </NavItem>
            </div>
          )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}