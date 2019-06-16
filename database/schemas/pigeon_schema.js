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
    }
});

module.exports = PigeonSchema;