// ----------------------------------------------------
// --- A U T H R O U T E S . J S ----------------------
// ----------------------------------------------------

const express = require('express');
const validator = require('validator');
const router = new express.Router();
const passport = require('passport');
const User = require('../db/models/user');
const jwt = require('jsonwebtoken');
const config = require('../config').init();

//  func: validateSignupForm
//  params: formVals
//  description: 
//      Ensures the form data passed from the signup form is valid.
const validateSignupForm = formVals => {
    const errors = {};
    const { email, password, zipCode } = formVals;
    let isFormValid = true;
    let message = '';

    if(!email || typeof email !== 'string' || !validator.isEmail(email)) {
        isFormValid = false;
        errors.email = "Please provide a correct email address";
    }

    if(!password || typeof password !== 'string' || password.trim().length < 8) {
        isFormValid = false;
        errors.password = 'Password must be at least 8 characters';
    }

    if(!zipCode || typeof zipCode !== 'string' || zipCode.trim().length < 5) {
        isFormValid = false;
        errors.zipCode = "Please enter a valid zip code";
    }

    if(!isFormValid) message = "Check the form for errors";

    return {
        success: isFormValid,
        message,
        errors,
    };
}

//  func: validateLoginForm
//  params: formVals
//  description: 
//      Ensures the form data passed from the login form is valid.
const validateLoginForm = formVals => {
    const { email, password } = formVals;
    let isFormValid = true;
    errors = {};
    message = "";
    if(!email || typeof email !== 'string' || !validator.isEmail(email)) {
        isFormValid=false;
        errors.email = "Please enter a valid email address";
    }

    if(!password || typeof password !== 'string' || password.trim().length < 8) {
        isFormValid = false;
        errors.password = "Password must be at least 8 characters in length.";
    }
    if(!isFormValid) message = "Incorrect Username/Password";

    return {
        success: isFormValid,
        message,
        errors,
    }
}
//  route: /signUp
//  
//  description: 
//      Creates a new user.
router.post('/signup', (req, res, next) => {
    // checks if the signup form is valid
    const validationResult = validateSignupForm(req.body);
    if(!validationResult.success) {
        return res.json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors,
        });
    }
    // Build a user object
    const userData = {
        email: req.body.email.trim(),
        password: req.body.password.trim(),
        isFoodTruck: req.body.isFoodTruck,
        role: req.body.isFoodTruck ? "Foodtruck" : "User",
        zipCode: req.body.zipCode,        
    };
    // Turn it into a mongo object
    const newUser = new User(userData);
    newUser.save((err) => {
        if(err) {
            // 11000 is a duplicate key error.
            if(err.code === 11000) {
                return res.json({
                    success: false,
                    message: "Check the form for errors",
                    errors : {
                        email: "The email is already being used"
                    }
                })
            }

            return res.status(400).json({
                success: false,
                message: "Could not process the form",
            });
        }
        const payload = {
            sub: newUser._id,
        }

        const token = jwt.sign(payload, config.jwtSecret);
        return res.status(200).json({
            success: true,
            token,
        })
    })
});

//  route: /login
//  
//  description: 
//      Checks if a user exists in a database and passes the object back.
router.post('/login', (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    if(!validationResult.success) {
        return res.json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors,
        }); 
    }
    return passport.authenticate("local-login", (err, token, userData) => {
        if(err) {
            if(err.name === 'IncorrectCredentialsError') {
                return res.json({
                    success: false,
                    message: err.message,
                })
            }
            return res.json({
                success: false,
                message: "We could not log you in.",
            });
        }
        return res.json({
            success: true,
            message: "You have successfully logged in!",
            token,
            user: userData
        })
    })(req, res, next);
});


//  route: /dataFromToken
//  
//  description: 
//      Gets a user object from token data
router.post("/dataFromToken", (req, res, next) => {
    if(!req.body.token) return res.status(401).end();    
    const token = req.body.token;
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err) return res.status(401).end();
        const userId = decoded.sub;
        return User.findById(userId, (userErr, user) => {
            if(userErr || !user) {
                return res.status(401).end();
            }
            return res.json(user);
        })
    });
})


module.exports = router;