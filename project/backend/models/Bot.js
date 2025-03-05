const mongoose = require("mongoose");

const BotSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  token: { type: String, required: true },
  script: { type: String, required: true },
  status: { type: String, default: "stopped" }, // running | stopped
});

module.exports = mongoose.model("Bot", BotSchema);
