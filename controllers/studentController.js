const Student = require("../models/Student");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("batchId");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
};

// Add a new student
exports.addStudent = async (req, res) => {
  const { name, email, phone, address, batchId, parentContact } = req.body;
  try {
    const student = new Student({
      name,
      email,
      phone,
      address,
      batchId,
      parentContact,
    });
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error adding student" });
  }
};
