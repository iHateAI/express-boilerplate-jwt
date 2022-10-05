const mongoose = require("mongoose");

const UserSchema = require("./user.schema");

module.exports = {
  User: mongoose.model("User", UserSchema),
};
