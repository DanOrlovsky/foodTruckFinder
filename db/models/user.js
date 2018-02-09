'use strict';
// ----------------------------------------------------
// --- U S E R . J S ----------------------------------
// ----------------------------------------------------

// INCLUDES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const foodTruck = require('./foodTruck');

const userSchema = new Schema({
    // email
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    // firstName
    firstName: String,
    // lastName
    lastName: String,
    // password
    password: { type: String, required: true, },
    // addressLine1
    addressLine1: String,
    // addressLine2
    addressLine2: String,
    // city
    city: String,
    // state
    state: String,
    // token
    token: String,
    // zipcode
    zipCode: { type: Number, required: true, },
    // roles User, Foodtruck, Vendor
    role: {
        type: String,
        enum: ['User', 'Foodtruck', 'Vendor'],
        default: ['User']
    },
    // If Foodtruck role, foodtrucks go here.
    foodTrucks: [
        foodTruck.foodTruckSchema,
    ],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    // Join date
    joined: { type: Date, default: Date.now }
}, {
    timestamps: true
});

// Hashes the password before we send it to the database.
userSchema.pre('save', function(next) {
    const user = this;
    const saltFactor = 5;
    
    // Checks whether there's a reason to hash the password in the first place.
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(saltFactor, (err, salt) => {
        if(err) return next(err);
        console.log("Salting password")
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                console.log(err);
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// Compares a candidate for password to a hashed password.
userSchema.methods.comparePassword = function(candidate) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidate, this.password, (err, isMatch) => {
            console.log(err);
            if(err) return reject(err);
            resolve(isMatch);
        })
    })

}


const User = mongoose.model("User", userSchema);

module.exports = User;