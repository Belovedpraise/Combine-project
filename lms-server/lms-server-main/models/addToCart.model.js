const {mongoose} = require('mongoose')

const cartSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
},{ timestamps: true})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = {Cart}

