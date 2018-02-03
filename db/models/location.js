// ----------------------------------------------------
// --- L O C A T I O N . J S --------------------------
// ----------------------------------------------------


//INCLUDES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    latitude: {
        type: String,
        required: true,
    }, 
    longitude: {
        type: String,
        required: true,
    },
    revenue: Number,
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;