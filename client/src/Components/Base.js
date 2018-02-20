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
                        <div className='logobox'>
                            <a href="/"><img src="../ImagesC/FTF-logo_OneColor_Truck_Red.png" width="100%" padding="0.5rem, 0"/></a>
                        </div> 
                    </div>
                        <div className="top-bar-middle">
                            <div className='logobox_Words'>
                                <a href="/"><img src="../ImagesC/FTF_Logo_Red.png" width="100%"/></a>
                            </div>
                        </div>
                    <div className="top-bar-right">
                        <NavBar 
                            isAuthenticated={this.props.isAuthenticated } 
                            userAuthChanged={this.props.userAuthChanged } />
                    </div>
                </div>
                <div className="container-fluid">
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
