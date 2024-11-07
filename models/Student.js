const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: String,
  address: String,
  dateOfBirth: Date,
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
  attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
  parentContact: String,
  enrollmentDate: Date,
});

module.exports = mongoose.model("Student", studentSchema);
