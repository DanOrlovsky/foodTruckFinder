const express = require("express");
const path = require("path");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const setup = require('./config').init();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(morgan('dev'));


// DB Setup
const db = process.env.MONGO_DB || setup.db.uri;
require('./db/mongoose')(db);


const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
  //const userService = require('./db/service/userService');
  //userService.findByEmail('milksteak@milksteak.com').then(users => console.log(users));

});
