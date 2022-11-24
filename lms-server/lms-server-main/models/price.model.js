const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    free_paid: {
        type: String,
        required: true
    },
    courseId : {
        type: String,
        required: true
    }
})

const Price = mongoose.model('price', priceSchema);

module.exports = {Price}