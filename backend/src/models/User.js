const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  operator: {
    type: String,
    enum: ["Addition", "Subtraction", "Multiplication"],
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
