const mongoose = require("mongoose");

const schema = mongoose.Schema();

const UserSchema = new schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
