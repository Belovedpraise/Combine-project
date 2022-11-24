const mongoose = require('mongoose');

const resourcesSchema = mongoose.Schema({

    resourceName: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    courseId: {
        type: String,
        required: true
    },
    courseDuration: {
        type: String,
        required: true
    },
    resourceType: {
        type: String,
        required: true
    }
})

const Resources = mongoose.model('resources', resourcesSchema);

module.exports = {Resources}