const mongoose = require('mongoose');

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

    },

    association: { type: mongoose.Schema.Types.ObjectId, ref: 'Association' },


})

module.exports = mongoose.model('Admin', AdminSchema)