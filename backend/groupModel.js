const mongoose = require("mongoose");
const { useColorScheme } = require("react-native");
const Schema = mognoose.Schema;

const groupModel = new Schema({
  name: { type: String, required: true },
  users: { type: Array, required: true },
});

const Group = mongoose.model("group", groupModel);
module.exports = Group;
