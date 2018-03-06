var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        type: String,
        minlength: 2,
        trim: true,
        required: true
    }
});

module.exports = {User};