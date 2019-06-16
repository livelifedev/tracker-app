const mongoose = require("mongoose");
const PigeonSchema = require("./../schemas/pigeon_schema");

const PigeonModel = mongoose.model("pigeon", PigeonSchema);

module.exports = PigeonModel;