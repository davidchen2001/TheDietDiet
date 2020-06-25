const mongoose = require ('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Helper = User.discriminator('Helper', new Schema({
    helperType: {
        type: Boolean,
        required: false, //0 is work, 1 is home
    },
    memberUsername: {
        type: String,
        required: false,
    },
}))

module.exports = Helper; 