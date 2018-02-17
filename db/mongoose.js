// ----------------------------------------------------
// --- M O N G O O S E . J S --------------------------
// ----------------------------------------------------
// Initializes our mongoose connection.


// INCLUDES
const mongoose = require('mongoose');
const userInitializer = require('./initializers/userInitializer');

//  func: anonymous
//  params: uri
//  description: 
//      Takes a mongoose DB string and establishes a connection to the server.
//      Once a connection is established it checks if there's data in the DB, 
//      and if not it will seed it with data.
module.exports = (uri) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri);
    const db = mongoose.connection;
    db.on('error', () => console.log("Error"));
    db.once('open', () => {
        console.log("Database connected");
        userInitializer.getUsers();
    })
}
