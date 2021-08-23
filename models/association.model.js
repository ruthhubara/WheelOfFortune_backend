const mongoose = require('mongoose');

const AssociationSchema = mongoose.Schema({
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

    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],


})

module.exports = mongoose.model('Association', AssociationSchema)