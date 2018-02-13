const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const Users = require('../db/models/user');


router.get('/dashboard', (req, res) => {   

})


module.exports = router;