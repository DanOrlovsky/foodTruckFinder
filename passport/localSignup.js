const User = require('../db/models/user');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true 
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        role: req.body.isFoodtruck ? "Foodtruck" : "User",
        zipCode: req.body.zipCode,        
    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if(err) return done(err);

        return done(null);
    })
})

