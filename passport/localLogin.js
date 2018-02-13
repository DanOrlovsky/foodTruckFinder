// ----------------------------------------------------
// --- L O C A L L O G I N . J S ----------------------
// ----------------------------------------------------


const jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config').init();


module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
}, (req, email, password, done) => {
    return User.findOne({ email: email }, (err, user) => {
        if(err) return done(err);
        if(!user) {
            const error = "Incorrect email or password";
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
})