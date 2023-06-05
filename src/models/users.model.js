const { Schema, model } = require("mongoose");

const UserSchema = new Schema({}, { timestamps: true });

const User = model("User", UserSchema);

module.exports = User;
