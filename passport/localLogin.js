// ----------------------------------------------------
// --- L O C A L L O G I N . J S ----------------------
// ----------------------------------------------------
// Our local login strategy via passport.
// Checks if a user exists in the database, and then checks if the
// password entered hashes correctly.

// INCLUDES
const jwt = require("jsonwebtoken");
const User = require("../db/models/user");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../config").init();

module.exports = new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
  },
  (req, email, password, done) => {
    // Attempts to find a user via email
    return User.findOne({ email: email }, (err, user) => {
      // HANDLE ERRORS
      if (err) return done(err);
      if (!user) {
        const error = new Error("Incorrect email or password");
        error.name = "IncorrectCredentialsError";
        return done(error);
      }

      // Compares the saved password to the entered one (after hashing it)
      return user
        .comparePassword(password)
        .then(() => {
          // Generates an object to create a token
          const payload = {
            sub: user._id
          };

          // Signs a token for the new user
          const token = jwt.sign(payload, config.jwtSecret);
          const data = {
            user: user
          };

          return done(null, token, data);
        })
        .catch(err => {
          return done(err);
        });
    });
  }
);
