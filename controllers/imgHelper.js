module.exports = function(filePath, cb) {
    var cloudinary = require("cloudinary");
  
    cloudinary.config({
      cloud_name: "dt8dkmawx",
      api_key: "874647751184517",
      api_secret: "wIAf9WliGNX669fZ69mh6uvImIQ"
    });
  
    cloudinary.uploader.upload(filePath, function(result) {
      console.log(result);
      cb(result);
    });
  };
  