const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Srcollege: {
    type: String,
  },
  srmarks: {
    type: Number,
    // default: 0, 
  },
  Jrcollege: {
    type: String,
  },
  jrmarks: {
    type: Number,
    // default: 0,
  },
  School: {
    type: String,
  },
  schoolmarks: {
    type: Number,
    // default: 0, 
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", UserSchema);
