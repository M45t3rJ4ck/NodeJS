const mongoose = require("mongoose");

const Schema = mongoose.Schema();

mongoose.set("useCreateIndex", true);

const GeoSchema = new mongoose.Schema({
  type:{
    type: String,
    default: "Point"
  },
  coordinates:{
    type: [Number],
    index: "2dsphere"
  }
});

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ">>Name field is required<<"]
  },
  career: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Member = mongoose.model("member", memberSchema);

module.exports = Member;
