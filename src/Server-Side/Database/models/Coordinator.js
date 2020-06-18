const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

module.exports = Coordinator = mongoose.model('coordinator', coordinatorSchema); 
