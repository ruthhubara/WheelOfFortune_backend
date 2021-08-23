const mongoose = require('mongoose');

const AssociationSchema = mongoose.Schema({
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

    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],


})

module.exports = mongoose.model('Association', AssociationSchema)