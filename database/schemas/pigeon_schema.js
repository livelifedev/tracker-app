const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PigeonSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // enum: ["City", "Day", "Night", "Wild"],
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    behaviour: {
        type: String,
        // enum: ["Docile", "Quirky", "Aggressive", "Gentle"],
        // required: true
    },
    region: {
        type: String,
        // enum: ["NSW", "QLD", "SA", "TAS", "VIC", "WA", "NT", "ACT"],
        // required: true
    },
    location: {
        type: Array,
        // required: false
    },
    activity: {
        type: Array,
        // required: false
    }
});

module.exports = PigeonSchema;