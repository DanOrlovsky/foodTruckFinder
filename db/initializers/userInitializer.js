// ----------------------------------------------------
// --- U S E R I N I T I A L I Z E R . J S ------------
// ----------------------------------------------------
//
// Runs when Mongo DB is connected, and checks if there are any records that exist in the database.
// If not, we will push seed data into it.

const User = require('../models/user');
const mongoose = require('mongoose');
const testUsers = require('../data/userData');

// The limit for how much data to attempt to pull from the db.
const limit = 1;

//  func: getUsers
//  description: 
//      Checks if there's a "limit" amount of data in the database.  If not,
//      we pass our userData object into it to allow for seed data.
const getUsers = () => {
    User.find({}).limit(limit).exec((err, collection) => {
        if(collection.length === 0) {
            testUsers.map((user) => {
                let newUser = new User(user);
                newUser.save((err, data) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                })
            })
            console.log("Mongo DB Users initialized");
            return;
        } else {
            console.log("Nothing to initialize");
        }
    })
}

module.exports = { 
    getUsers: getUsers
}