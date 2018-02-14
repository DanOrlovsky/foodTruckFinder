const cloudinary = require("cloudinary");
 const express = require("express");
 const multiparty = require("multiparty");
 
 cloudinary.config({
     cloud_name: "dt8dkmawx",
     api_key: "874647751184517",
     api_secret: "wIAf9WliGNX669fZ69mh6uvImIQ"
   });
 
   router.get("/upload/:file", function(req, res) {
     var file = req.params.file;
     var uploaded = cloudinary(file, function(result) {
       res.json(result);
     });
   });
 
   router.post("/map", function(req, res) {
   
     var marker = new multiparty.marker();
   
     marker.parse(req, function(err, fields, files) {
   
       console.log(fields);
   
       cloudinary.uploader.upload(files.upload[0].path, function(result) {
   
         // var cols =
         //   "foodTrucks.name, city_state, category, contact, item_description, img_link";
         // var vals = [
         //   fields.itemTitle,
         //   fields.location,
         //   fields.category,
         //   fields.contact,
         //   fields.description,
         //   result.secure_url
         // ];
         marker.create(cols, vals, function returnDataToController(result) {
           res.status(200).json(result);
         });
       });
     });
   });
 
   module.exports = router;