const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const User = require('../db/models/user');

router.post("/updateUser", (req, res) => {
    const userToUpdate = new User(req.body.userData);
    User.findOneAndUpdate({ "_id": userToUpdate._id }, userToUpdate, { upsert: true }).then(userUpdated => {
        return res.json({
            success: true,
        })
    }).catch(err => { console.log(err); return res.json(err)})
})

router.post("/addImage", (req, res) => {
    // Food truck image will be in req.body.imageFile.
    // Foodtruck ID is in req.body.id
})

module.exports = router;