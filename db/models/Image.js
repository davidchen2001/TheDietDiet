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
        required: false 
    },
    imageType: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image; 