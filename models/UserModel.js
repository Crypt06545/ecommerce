const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: String,

    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },

    email: String,
    mobile: Number,
    gender: String,
    password: String,

    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    IsAdmin: { type: Boolean, default: false },

}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)