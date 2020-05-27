const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageName:{
        type: String,
        default: "None",
        required: true
    },
    imageData: {
        type: String,
        required: true 
    },
    imageType: {
        type: String,
        required: false
    }
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image; 