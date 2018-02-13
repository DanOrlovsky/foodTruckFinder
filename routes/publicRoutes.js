const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const Users = require('../db/models/user');

const convertToMiles = (miles) => {
    return miles / 3963.2;
}

router.get('/getLocalTrucks/:lat/:lng/:miles?', (req, res, next) => {   
    let milesSearch = req.params.miles ? convertToMiles(req.headers.miles) :  convertToMiles(15); 
    let coordinates = [ parseFloat(req.params.lng), parseFloat(req.params.lat) ];
    
    Users.find({ 
        'foodTrucks.loc' : {
            $geoWithin: {
                $centerSphere: [[ coordinates[0], coordinates[1]], milesSearch ]
            }
        } 
    }).then(users => { 
        
        const openFoodTrucks = [];
        for(let i = 0; i < users.length; i++) {
            users[i].foodTrucks.map((current) => {
                if(current.isOpen) {
                    openFoodTrucks.push(current);
                }
            })
        }
        console.log("Open Users: " + openFoodTrucks);
        return res.json(openFoodTrucks);
    })
    .catch(err => res.send(err));
})


module.exports = router;