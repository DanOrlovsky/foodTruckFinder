// ----------------------------------------------------
// --- P U B L I C R O U T E S . J S ------------------
// ----------------------------------------------------


const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const Users = require('../db/models/user');

const convertToMiles = (miles) => {
    return miles / 3963.2;
}


//  route: /getLocalTrucks
//  params: latitude, longititude, miles
//  description: 
//      Searches the database for foodtrucks that are open and within a certain mile radius of
//      a location.
router.get('/getLocalTrucks/:lat/:lng/:miles?', (req, res, next) => {   
    // Set the search radius
    let milesSearch = req.params.miles ? convertToMiles(req.params.miles) :  convertToMiles(10); 
    // Set up our coordinates for geospatial querying.  [lng, lat]
    let coordinates = [ parseFloat(req.params.lng), parseFloat(req.params.lat) ];
    
    // Query the database based on location
    Users.find({ 
        'foodTrucks.loc' : {
            $geoWithin: {
                $centerSphere: [[ coordinates[0], coordinates[1]], milesSearch ]
            }
        } 
    }).then(users => { 
        // Create an array of open foodtrucks
        const openFoodTrucks = [];
        for(let i = 0; i < users.length; i++) {
            users[i].foodTrucks.map((current) => {
                if(current.isOpen) {
                    openFoodTrucks.push(current);
                }
            })
        }
        return res.json(openFoodTrucks);
    })
    .catch(err => res.send(err));
})


module.exports = router;