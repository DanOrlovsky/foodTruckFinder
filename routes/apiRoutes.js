const express = require('express');
const router = new express.Router();
const foodTrucks = require('../db/models/foodTruck');
const FoodTruck = foodTrucks.FoodTruck;
const User = require('../db/models/user');
const path = require('path');
const cloudinary = require("cloudinary");
const uuidv1 = require('uuid/v1');
const busboy = require('busboy');

cloudinary.config({
    cloud_name: "dt8dkmawx",
    api_key: "874647751184517",
    api_secret: "wIAf9WliGNX669fZ69mh6uvImIQ"
});


router.post("/updateUser", (req, res) => {
    const userToUpdate = new User(req.body.userData);
    User.findOneAndUpdate({ "_id": userToUpdate._id }, userToUpdate, { upsert: true }).then(userUpdated => {
        return res.json({
            success: true,
        })
    }).catch(err => { console.log(err); return res.json(err)})
})

router.post("/addImage", (req, res) => {
    req.pipe(req.busboy);
    req.busboy.on('file', (fieldname, file, filename) => {
        let allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
        let goodExtension = false;
        for (let i = 0; i < allowedExtensions.length; i++) {
            if (path.extname(filename).toLowerCase() === allowedExtensions[i]) goodExtension = true;
        }
        if (!goodExtension) return RenderDashboard(req, res, "Invalid file extension");
        filename = uuidv1() + filename;
    });
    res.end();
    // cloudinary.uploader.upload(file, function(result) {
    //     console.log(result);
    // }).catch(err => { console.log(err); return res.json(err)})    
    // Food truck image will be in req.body.imageFile.
    // Foodtruck ID is in req.body.id
})


module.exports = router;