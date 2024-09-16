const { generateRandomId } = require('../helpers/validation.helpers');
const Course = require('../models/Course.model');
const Note = require('../models/Note.model');
const Keyword = require('../models/Keyword.model');
const Topic = require('../models/Topic.model');
const SubTopic = require('../models/Subtopic.model');
const Problem = require('../models/Problem.model');
const { dummyContent } = require('../helpers/content');

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

        // Fetch keywords, note, and topics related to the course
        const keywords = await Keyword.find({ courseId: course.courseId });
        const note = await Note.findOne({ courseId: course.courseId });

        // Fetch topics related to the course
        const topics = await Topic.find({ courseId: course.courseId });

        // For each topic, fetch its subtopics and their problems
        const topicsWithSubtopicsAndProblems = await Promise.all(topics.map(async (topic) => {
            // Fetch subtopics for each topic
            const subtopics = await SubTopic.find({ topicId: topic.topicId });

            // For each subtopic, fetch its problems
            const subtopicsWithProblems = await Promise.all(subtopics.map(async (subtopic) => {
                const problems = await Problem.find({ subtopicId: subtopic.subtopicId });

                // Attach the problems to the subtopic
                return {
                    subtopicId: subtopic.subtopicId,
                    title: subtopic.title,
                    problems: problems.map(problem => ({
                        problemId: problem.problemId,
                        title: problem.title,
                        difficulty: problem.difficulty,
                        note: problem.note,
                        youtubeLink: problem.youtubeLink,
                        geeksForGeeksLink: problem.geeksForGeeksLink,
                        articleLink: problem.articleLink,
                    }))
                };
            }));

            // Attach the subtopics to the topic
            return {
                topicId: topic.topicId,
                title: topic.title,
                subtopics: subtopicsWithProblems
            };
        }));

        return res.status(200).json({
            success: true,
            course,
            keywords,
            note,
            topics: topicsWithSubtopicsAndProblems
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getCourseBySlugAndProblem = async (req, res) => {
    try {
        const { problemId } = req.params;

        // Find course by slug
        const [problem] = await Problem.find({ problemId: problemId });

        if (!problem) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        return res.status(200).json({
            success: true,
            problem,
            content: dummyContent
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Create a new topic
exports.createTopic = async (req, res) => {
    const { title } = req.body;
    const { courseId } = req.params;
    try {
        const topicId = generateRandomId('NEW', 'TOPIC')

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

exports.createSubTopic = async (req, res) => {
    const { title } = req.body;
    const { topicId } = req.params;
    try {
        const subtopicId = generateRandomId('NEW', 'SUBTOPIC')

        // Create a new course
        const newTopic = new SubTopic({
            topicId,
            subtopicId,
            title,
        });
        await newTopic.save();
        res.status(201).json({ success: true, newTopic });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createProblem = async (req, res) => {
    const { title, difficulty, note, youtubeLink, geeksForGeeksLink, articleLink, content } = req.body;
    const { subtopicId } = req.params;

    try {
        // Generate unique problemId
        const problemId = generateRandomId('NEW', 'PROBLEM');

        // Create a new problem
        const newProblem = new Problem({
            problemId,
            subtopicId,
            title,
            difficulty,
            note,
            youtubeLink,
            geeksForGeeksLink,
            articleLink,
            content,
        });

        // Save the new problem to the database
        await newProblem.save();

        res.status(201).json({ success: true, problem: newProblem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
