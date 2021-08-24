const mongoose = require('mongoose');

const AssociationSchema = mongoose.Schema({
    nameAssociation: {
        type: String,
        require: true

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