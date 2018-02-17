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
                        <Link to="/">
                            <div className='logobox'>
                                <img src="../ImagesC/FTF-logo_OneColor_Truck.png" width="100%" padding="0.5rem, 0"></img>
                            </div> 
                        </Link>
                    </div>
                        <div className="top-bar-middle">
                            <div className='logobox_Words'>
                                <img src="../ImagesC/Logo_Word.png" width="100%"></img>
                            </div>
                        </div>
                    <div className="top-bar-right">
                        <NavBar 
                            isAuthenticated={this.props.isAuthenticated } 
                            userAuthChanged={this.props.userAuthChanged } />
                    </div>
                </div>
                { this.props.children }
                <div className="footer-copyright">
                    <div className="container text-center">
                       © 2018 Copyright: OMG CAN WE BE SERIOUS.
                    </div>
                </div>
            </div>
        )
    };
};

export default Base;
