// ----------------------------------------------------
// --- F O O D T R U C K . J S ------------------------
// ----------------------------------------------------


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodTruckSchema = new Schema({
    // name
    name: { type:String, required: true },
    currentLocation: {
        type: Schema.Types.ObjectId,
        ref: "Location",
    },
    // locations
    locations: [{ 
         type: Schema.Types.ObjectId,
         ref: "Location"
     }],
    // isOpen
    isOpen: { 
       type: Boolean,
       required: true,
       default: false,
    },

});

const FoodTruck = mongoose.model("FoodTruck", foodTruckSchema);

module.exports = FoodTruck;