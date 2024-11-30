const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('students');
        res.json(courses);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add a course
exports.addCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(400).send('Error Adding Course');
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(course);
    } catch (err) {
        res.status(400).send('Error Updating Course');
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: 'Course Deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
