const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Get all students
router.get("/", studentController.getAllStudents);

// Add a new student
router.post("/", studentController.addStudent);

module.exports = router;
