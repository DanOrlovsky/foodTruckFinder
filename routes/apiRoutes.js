const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const User = require('../db/models/user');
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: "dt8dkmawx",
    api_key: "874647751184517",
    api_secret: "MAFKgFa4JG1hnXG45O5EJgoZ7qY"
  });

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
    const image = req.body.image;
    const truckToUpdate = new FoodTruck(req.body.id );
    const uploaded = cloudinary(image, function(result) {
        res.json(result);

        cloudinary.uploader.upload(files.upload[0].path, function(result) {
            console.log(result);
        // FoodTruck.updateOne({"_id": req.body.id }, { $set: { truckToUpdate }}).then(truckUpdated => {
        //     console.log(truckUpdated);
        //     return res.json({
        //         success: true,
        //     })
        //   })
        }).catch(err => { console.log(err); return res.json(err)})


    // req.body.id
    // Food truck image will be in req.body.image
    })
})

module.exports = router;