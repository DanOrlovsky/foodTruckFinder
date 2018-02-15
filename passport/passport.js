

const jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config').init();
const LocalStrategy = require('passport-local').Strategy;


module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        // Find the user by their id.
        User.findById(id).then((user) => {
            done(user);
        }).catch(err => done(err));
    })

    passport.use('local-login', new PassportLocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true,
    }, (req, email, password, done) => {
        return User.findOne({ email: email }, (err, user) => {
            if(err) return done(err);
            if(!user) {
                const error = new Error("Incorrect email or password");
                error.name = 'IncorrectCredentialsError';
                return done(error);
            }
            
            return user.comparePassword(password).then(() => {
                const payload = {
                    sub: user._id
                };
                
                const token = jwt.sign(payload, config.jwtSecret);
                const data = {
                    user: user,
                };
    
                return done(null, token, data);
            }).catch((err) => {
                
                return done(err);
            })
        })
    }))
    
    passport.use('local-signup', new PassportLocalStrategy({
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
    }))
}