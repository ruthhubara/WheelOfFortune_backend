const mongoose = require('mongoose');

const AssociationSchema = mongoose.Schema({
    nameAssociation: {
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
    domain: {
        type: String,
        require: true

    },
    description: {
        type: String,
    },
    email: {

    },
    phone: {

    },
    img: [{

    }],
    video: [{
        type: String,
        require: true
    }],

    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],


})

module.exports = mongoose.model('Association', AssociationSchema)