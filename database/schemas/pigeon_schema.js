const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PigeonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    behaviour: {
        type: String,
        required: true
    },
    location: {
        type: Array,
        required: false
    },
    activity: {
        type: Array,
        required: false
    }
});

module.exports = PigeonSchema;