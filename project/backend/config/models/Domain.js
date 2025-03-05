const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema({
  domain: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Domain", DomainSchema);
