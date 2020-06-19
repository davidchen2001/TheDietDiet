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
    }
}));

module.exports = Member; 
