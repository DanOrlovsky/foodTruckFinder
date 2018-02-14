'use strict';


const User = require('../db/models/user');
const PassportLocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const config = require('../config').init();

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        isFoodTruck: req.body.isFoodTruck,
        zipCode: req.body.zipCode,        
    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if(err) return done(err);
        const payload = {
            sub: newUser._id,
        }

        jwt.sign(payload, config.jwtSecret);
        return done(null, token);
    })
})

