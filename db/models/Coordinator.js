const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const Coordinator = User.discriminator("Coordinator", new Schema({
    region: {
        type: String,
        required: false
    }
}))

module.exports = Coordinator;