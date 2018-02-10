import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Base.css';

const Base = ({children}) => (
    <div className='body-base'>
        <div className='top-bar'>
            <div className="top-bar-left">
                <Link to="/">Food Truck Finder</Link>
            </div>
            <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
        { children }
    </div>
);

//Base.propTypes = {
//    children: PropTypes.object.isRequired,
//};


export default Base;