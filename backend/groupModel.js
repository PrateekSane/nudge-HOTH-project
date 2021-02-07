const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupModel = new Schema({
  name: { type: String, required: true },
  users: { type: Array, required: true },
});

const Group = mongoose.model("group", groupModel);
module.exports = Group;
