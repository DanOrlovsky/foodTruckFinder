const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const Users = require('../db/models/user');

const convertToMiles = (miles) => {
    return miles / 3963.2;
}

router.get('/getLocalTrucks', (req, res) => {   
    let milesSearch = req.headers.miles ? convertToMiles(req.headers.miles) :  convertToMiles(5); 
    let coordinates = [ parseFloat(req.headers.lng), parseFloat(req.headers.lat) ];
    Users.find({ 
        'foodTrucks.loc' : {
            $geoWithin: {
                $centerSphere: [[ coordinates[0], coordinates[1]], milesSearch ]
            } 
        }
    }).then(users => { console.log(users.length); return res.json(users) }
    ).catch(err => res.send(err));
    
})


module.exports = router;