

const express = require('express');
const validator = require('validator');
const router = new express.Router();


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

router.post('/login', (req, res) => {
    const validationResult = validateLoginForm(req.body);
    if(!validation.success) {
        return res.json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors,
        }); 
    }
    return res.status(200);
})

module.exports = router;