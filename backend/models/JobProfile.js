const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  CurrentJob: {
    type: String,
  },
  Position: {
    type: String,
  },
  Salary: {
    type: String,
  },
  Experiance: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JobProfile", UserSchema);
