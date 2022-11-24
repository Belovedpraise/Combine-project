const mongoose = require('mongoose');

const coursesSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCategory: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }, 
    coverImage : {
        type: String,
        required: true
    }
})

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = {Courses}