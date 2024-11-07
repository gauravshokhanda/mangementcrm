const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: String,
  role: { type: String, enum: ["Admin", "Teacher", "Support"], required: true },
  permissions: [String],
});

module.exports = mongoose.model("Staff", staffSchema);
