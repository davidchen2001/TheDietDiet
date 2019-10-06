const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const helperSchema = new Schema({
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
    helperType: {
        type: Boolean,
        required: false, //0 is work, 1 is home
    },
    memberUsername: {
        type: String,
        required: false,
    }, dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Helper = mongoose.model('helper', helperSchema); 
