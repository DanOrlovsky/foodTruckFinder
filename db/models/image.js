// ----------------------------------------------------
// --- I M A G E . J S --------------------------
// ----------------------------------------------------


//INCLUDES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image: String,
});

const Image = mongoose.model("Image", imageSchema);

module.exports = {
    Image: Image,
    imageSchema: imageSchema,
};