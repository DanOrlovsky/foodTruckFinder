const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const User = require('../db/models/user');

router.post("/updateUser", (req, res) => {
    const userToUpdate = new User(req.body.userData);
    User.updateOne({ "_id": req.body.id }, { $set: { userToUpdate}}).then(userUpdated => {
        console.log(userUpdated);
        return res.json({
            success: true,
        })
    }).catch(err => { console.log(err); return res.json(err)})
})

router.post("/updateFoodTruck", (req, res) => {
    // Food truck image will be in req.body.image
})

module.exports = router;