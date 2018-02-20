import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../Modules/Auth';
import './Base.css';
import NavBar from './NavBar/NavBar.js';


class Base extends Component {

    render() {
        return (
            <div className='body-base'>
                <NavBar 
                    isAuthenticated={this.props.isAuthenticated } 
                    userAuthChanged={this.props.userAuthChanged } />
                <div className="container-fluid page-content">
                    { this.props.children }
                </div>
                <div className="footer-copyright">
                    <div className="container text-center">
                       © <span className="arial">2018</span> Copyright Food Truck Finder Inc.
                    </div>
                </div>
            </div>
        )
    };
};

export default Base;
