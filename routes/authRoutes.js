// ----------------------------------------------------
// --- A U T H R O U T E S . J S ----------------------
// ----------------------------------------------------

const express = require('express');
const validator = require('validator');
const router = new express.Router();
const AWS = require('aws-sdk');
const passport = require('passport');
const User = require('../db/models/user');
let myBucket = "food-truck-avatars";
let s3 = new AWS.S3({ params: { Bucket: myBucket }});

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

router.post('/signup', (req, res) => {
    const validationResult = validateSignupForm(req.body);
    if(!validationResult.success) {
        return res.json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors,
        });
    }
    
    return res.status(200);
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
    passport.authenticate("local-login", (err, token, userData) => {
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
        });
    })(req, res, next);
});

router.get("/dataFromToken", (req, res, next) => {
    User.findOne({ where: { token: req.token}}).then((user) => {
        return res.json(user);
    }).catch(err => res.json({ error: "You must be lost."}));
})

module.exports = router;