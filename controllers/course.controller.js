const Course = require('../models/Course.model');

// Add a new course
exports.addCourse = async (req, res) => {
    const { courseId, title, description } = req.body;

    try {
        const newCourse = new Course({
            courseId,
            title,
            description
        });

        await newCourse.save();
        return res.status(201).json({ success: true, message: 'Course added successfully', course: newCourse });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        return res.status(200).json({ success: true, courses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
