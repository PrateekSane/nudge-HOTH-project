const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  groups: { type: Array, default: [] },
  friends: { type: Array, default: [] },
  nudges: { type: Array, default: [] },
});

const User = mongoose.model("user", userModel);
module.exports = User;
