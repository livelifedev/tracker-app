const {Schema} = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        // required: true,
        // trim: true
    },
    email: {
        type: String,
        // required: true,
        // trim: true
    },
    password: {
        type: String,
        // required: true,
        // trim: true
    },
    rank: {
        type: String,
        // required: true
    },
    encounters: {
        type: Array
    },
    documented: {
        type: Array
    }
});

module.exports = UserSchema;