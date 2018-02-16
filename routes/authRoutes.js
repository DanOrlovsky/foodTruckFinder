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

const validateSignupForm = payload => {
    const errors = {};
    const { email, password, zipCode } = payload;
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

const validateLoginForm = payload => {
    const { email, password } = payload;
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
    if(!isFormValid) message = "Check the form for errors.";

    return {
        success: isFormValid,
        message,
        errors,
    }
}

router.post('/signup', (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    console.log(req.body);
    if(!validationResult.success) {
        return res.json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors,
        });
    }
    const userData = {
        email: req.body.email.trim(),
        password: req.body.password.trim(),
        isFoodTruck: req.body.isFoodTruck,
        role: req.body.isFoodTruck ? "Foodtruck" : "User",
        zipCode: req.body.zipCode,        
    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if(err) {
            console.log(err);
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

    //return passport.authenticate("local-signup", (err, token) => {
    //})
});

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

router.post("/updateUser", (req, res) => {
    User.update(req.body).then(userUpdated => {
        return res.json({
            success: true,
        })
    }).catch(err => res.json(err))
})
module.exports = router;