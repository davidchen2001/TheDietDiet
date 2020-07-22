const mongoose = require ('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Member = User.discriminator('Member', new Schema({
    homeHelperName: {
        type: String,
        required: false,
    }, workHelperName: {
        type: String,
        required: false,
    }, memberStatus: { //0 - not a member yet, 1 - is a member 
        type: Boolean,
        required: false,
        default: 0
    }
}));

module.exports = Member; 
