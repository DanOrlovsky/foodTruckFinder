import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../Modules/Auth';
import './Base.css';

class Base extends Component {

    render() {
        return (
            <div className='body-base'>
                <div className='top-bar'>
                    <div className="top-bar-left">
                        <Link to="/">Food Truck Finder</Link>
                    </div>
                    <div className="top-bar-right">
                        { Auth.isUserAuthenticated() ? (
                            <div>
                                <Link to="/api/dashboard">User</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        ) : (
                            <div>
                                <Link to="/login">Log in</Link>
                                <Link to="/signup">Sign up</Link>
                            </div>
                        ) }
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