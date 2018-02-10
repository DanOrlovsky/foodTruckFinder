// ----------------------------------------------------
// --- F O O D T R U C K . J S ------------------------
// ----------------------------------------------------

const GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const location = require('./location');
const foodTruckSchema = new Schema({
    // name
    name: { type:String, required: true },
    loc: {type: [Number], index: '2dsphere' },
    
    // locations
    locations: [ location.locationSchema ],
     // url
    url: String,
    // imageUrl
    imageUrl: String,
    // isOpen
    isOpen: { 
       type: Boolean,
       required: true,
       default: false,
    },

});

const FoodTruck = mongoose.model("FoodTruck", foodTruckSchema);

module.exports = { 
    FoodTruck: FoodTruck,
    foodTruckSchema: foodTruckSchema,
};