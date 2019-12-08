const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
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
    memberStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    homeHelperName: {
        type: String,
        required: false,
    }, workHelperName: {
        type: String,
        required: false,
    }, dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Member = mongoose.model('member', memberSchema); 
