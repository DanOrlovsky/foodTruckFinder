// ----------------------------------------------------
// --- A U T H C H E C K . J S ------------------------
// ----------------------------------------------------
const jwt = require('jsonwebtoken');
const config = require('../config').init();
const User = require('../db/models/user');

module.exports = (req, res, next) => {
    if(!req.body.token) return res.status(401).end();
    const token = req.body.token;
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err) { console.log(err); return res.status(401).end() }

        return next();
    });
}