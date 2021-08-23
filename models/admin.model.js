const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        require: true

    },
    password: {
        type: String,
        length: 8,
        require: true
    },
    email: {
        type: String,

    },

    association: { type: mongoose.Schema.Types.ObjectId, ref: 'Association' },


})

module.exports = mongoose.model('Admin', AdminSchema)