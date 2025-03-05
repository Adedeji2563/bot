const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  domain: { type: String, unique: true }, // Assigned by admin
  ram: { type: Number, default: 1024 }, // Default 1GB
  cpu: { type: Number, default: 40 }, // Default 40% CPU
  storage: { type: String, default: "local" }, // "local" or "s3"
});

module.exports = mongoose.model("User", UserSchema);
