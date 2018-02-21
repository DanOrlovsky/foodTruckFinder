// ----------------------------------------------------
// --- F O O D T R U C K . J S ------------------------
// ----------------------------------------------------

const GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const location = require('./location');
const foodTruckSchema = new Schema({
    // name
    name: { type:String, default: "" },
    loc: {type: [Number], index: '2dsphere' },
    description: {
        type: String,
        default: "",
    },
    cuisine: {
        type: String,
        default: "",
    },
    // locations
    locations: [ location.locationSchema ],
     // url
    url: {
        type: String,
        default: "",
    },
    // imageUrl
    imageUrl: {
        type: String,
        default: "",
    },
    aggregateRatings: {
        type: Schema.Types.Array,
        default: [],
    },
    comments: {
        type: Schema.Types.Array,
        default: [],
    },
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