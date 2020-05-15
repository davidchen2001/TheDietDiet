const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    isHelper: {
        type: Boolean,
        default: false,
    }
});

module.exports = User = mongoose.model('user', userSchema); 
