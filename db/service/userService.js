const User = require('../models/user');


module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            User.find({}).then(users => {
                resolve(users);
            }).catch(err => {
                if(err.error !== 'not_found') {
                    resolve(err);
                } else {
                    reject(err);
                }
            })
        })
    },

    findByToken: (token) => {
        return new Promise((resolve, reject) => {
            User.find({ token: token}).then((user) => {
                resolve(user);
            }).catch((err) => {
                if(err.error !== 'not_found') {
                    return resolve(err);
                }
                reject(err);
            })
        })
    },
     
    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            User.find({ email: email }).then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            })
        })
    },
/*    addUser: (params) => {
        this.findByEmail(params.email).then(user => {
            if(user.length > 0) {
                return
            }
        })
    }*/
}