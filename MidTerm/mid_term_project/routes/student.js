// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Route to create a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.redirect('/home');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    console.log(students);
    res.render('index', { students: students});
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
