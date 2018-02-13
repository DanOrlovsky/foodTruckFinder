// ----------------------------------------------------
// --- A U T H C H E C K . J S ------------------------
// ----------------------------------------------------
const jwt = require('jsonwebtoken');
const config = require('../config').init();
const User = require('../db/models/user');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).end();
    const token = req.headers.authorization.split(' ')[1];
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err) return res.status(401).end();
        const userId = decoded.sub;
        return User.findById(userId, (userErr, user) => {
            if(userErr || !user) {
                return res.status(401).end();
            }

            return next();
        })
    });
}