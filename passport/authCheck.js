// ----------------------------------------------------
// --- A U T H C H E C K . J S ------------------------
// ----------------------------------------------------
// Takes a token and verifies it using JWT.
//

// INCLUDES
const jwt = require("jsonwebtoken");
const config = require("../config").init();

// Function serves as middleware on the /api route.
module.exports = (req, res, next) => {
  if (!req.body.token) return res.status(401).end();
  const token = req.body.token;
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).end();
    }

    return next();
  });
};
