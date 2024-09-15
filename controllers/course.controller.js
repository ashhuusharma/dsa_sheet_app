const { generateRandomId } = require('../helpers/validation.helpers');
const Course = require('../models/Course.model');
const Note = require('../models/Note.model');
const Keyword = require('../models/Keyword.model');
const Topic = require('../models/Topic.model');

// Add a new course
exports.addCourse = async (req, res) => {
    const { title, description, noteContent, keywords } = req.body;

    try {
        const courseId = generateRandomId('NEW', 'COURSE')
        const noteId = generateRandomId('NEW', 'NOTE')
        const slug = title.toLowerCase().replace(/\s+/g, '-'); // Create slug from title

        // Create a new course
        const newCourse = new Course({
            courseId,
            title,
            slug,
            description,
        });

        // Save the course
        await newCourse.save();

        // Create associated notes if provided
        if (noteContent) {
            const newNote = new Note({
                noteId: noteId,
                courseId: courseId,
                content: noteContent
            });
            await newNote.save();
        }

        // Create associated keywords if provided
        if (keywords && Array.isArray(keywords)) {
            for (const keyword of keywords) {
                const keywordId = generateRandomId('NEW', 'KEYWORD')

                const newKeyword = new Keyword({
                    keywordId: keywordId,
                    courseId: courseId,
                    points: keyword
                });
                await newKeyword.save();
            }
        }

        // Save the updated course with notes and keywords
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

exports.getCourseBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        // Find course by slug
        const course = await Course.findOne({ slug });

        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }
        const keywords = await Keyword.find({ courseId: course.courseId });
        const note = await Note.findOne({ courseId: course.courseId });
        const topic = await Topic.findOne({ courseId: course.courseId });

        return res.status(200).json({ success: true, course, keywords, note, topic });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Create a new topic
exports.createTopic = async (req, res) => {
    const { title, courseId } = req.body;
    try {
        const topicId = generateRandomId('NEW', 'NOTE')

        // Create a new course
        const newTopic = new Topic({
            topicId,
            courseId,
            title,
        });
        await newTopic.save();
        res.status(201).json({ success: true, newTopic });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};