'use strict';

const express = require("express");
const path = require("path");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const setup = require('./config').init();
const app = express();
const passport = require('passport');
const User = require('./db/models/user');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(morgan('dev'));


const signupStrategy = require('./passport/localSignup');
const loginStrategy = require('./passport/localLogin');
passport.use('local-signup', signupStrategy);
passport.use('local-login', loginStrategy);

/*const authMiddleware = require('./passport/authCheck');
app.use('/api', authMiddleware);*/

// DB Setup
const db = process.env.MONGO_DB || setup.db.uri;
require('./db/mongoose')(db);


const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const publicRoutes = require('./routes/publicRoutes');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/public', publicRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
