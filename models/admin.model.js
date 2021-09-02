const mongoose = require('mongoose');
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    password: {
        type: String,
        length: 8,
        required: true
    },
    email: {
        type: String,
        require: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    association: { type: mongoose.Schema.Types.ObjectId, ref: 'Association' },


})

module.exports = mongoose.model('Admin', AdminSchema)



