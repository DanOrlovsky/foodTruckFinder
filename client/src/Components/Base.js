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
                <div className='top-bar'>
                    <div className="top-bar-left">
                        <Link to="/">Food Truck Finder</Link>
                    </div>
                    <div className="top-bar-right">
                        <NavBar 
                            isAuthenticated={this.props.isAuthenticated } 
                            userAuthChanged={this.props.userAuthChanged } />
                    </div>
                </div>
                { this.props.children }
                <div class="footer-copyright">
                    <div class="container text-center">
                       © 2018 Copyright: Team C# Guru Dan's Cheer Squad
                    </div>
                </div>
            </div>
        )
    };
};

export default Base;
