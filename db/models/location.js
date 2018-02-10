// ----------------------------------------------------
// --- L O C A T I O N . J S --------------------------
// ----------------------------------------------------


//INCLUDES
const GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    location: mongoose.Schema.Types.Point,
    revenue: Number,
});

const Location = mongoose.model("Location", locationSchema);

module.exports = {
    Location: Location,
    locationSchema: locationSchema,
};