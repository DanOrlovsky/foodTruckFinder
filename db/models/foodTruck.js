// ----------------------------------------------------
// --- F O O D T R U C K . J S ------------------------
// ----------------------------------------------------


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const location = require('./location');
const foodTruckSchema = new Schema({
    // name
    name: { type:String, required: true },
    currentLocation: 
        { 
            type: Array,
            ref: "Location",
        },
    
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