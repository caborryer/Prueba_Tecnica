const { model, Schema } = require("mongoose");

const users = new Schema({
  name: { type: String, required: false },
  username: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = model("users", users);
