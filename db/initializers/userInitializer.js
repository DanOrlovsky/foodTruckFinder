

const User = require('../models/user');
const mongoose = require('mongoose');
const testUsers = require('../data/userData');

const limit = 1;

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