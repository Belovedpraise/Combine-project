
const bcrypt = require('bcrypt');



const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    // middlename: {
    //     type: String,
    //     required: true
    // },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    mobilenumber: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },
}, {timestamps: true});

userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

