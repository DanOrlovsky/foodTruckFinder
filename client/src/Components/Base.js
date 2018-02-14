import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../Modules/Auth';
import './Base.css';
import NavBar from './NavBar/NavBar.js';

class Base extends Component {

    state = {
        isAuthenticated: false,
    }

    componentDidMount() {
        this.setState({ isAuthenticated: Auth.isUserAuthenticated() });
    }

    logOut = event => {
        event.preventDefault();
        Auth.deauthenticateUser();
        this.setState({ isAuthenticated: false });
    }

    render() {
        return (
            <div className='body-base'>
                <div className='top-bar'>
                    <div className="top-bar-left">
                        <Link to="/">Food Truck Finder</Link>
                    </div>
                    <div className="top-bar-right">
                        <NavBar />
                    </div>
                </div>
                { this.props.children }
            </div>
        )};
};

//Base.propTypes = {
//    children: PropTypes.object.isRequired,
//};


export default Base;



// <div className="top-bar-right">
// { this.state.isAuthenticated ? (
//     <div>
//         <NavBar />
//         <Link to="/api/dashboard">User</Link>
//         <Link to="/logout" onClick={ this.logOut }>Logout</Link>
//     </div>
// ) : (
//     <div>
//         <Link to="/login">Log in</Link>
//         <Link to="/signup">Sign up</Link>
//     </div>
// ) }
// </div>


//============================================

// { this.state.isAuthenticated ? (
//     <div>
//         <NavBar />
//         <Link to="/api/dashboard">User</Link>
//         <Link to="/logout" onClick={ this.logOut }>Logout</Link>
//     </div>
// ) : (
//     <div>
//         <Link to="/login">Log in</Link>
//         <Link to="/signup">Sign up</Link>
//     </div>
// ) }