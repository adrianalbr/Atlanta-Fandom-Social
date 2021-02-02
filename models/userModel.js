const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is required",
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
  },

  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required",
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },

  DOB: {
    type: Date,
    required: true,
  },

  interests: {
      type: [String],
      default:["Comic", "Cosplay", "Video Games", "Anime"]
  },

  followers: {
    type: [String]
  }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;