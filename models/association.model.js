const mongoose = require('mongoose');

const AssociationSchema = mongoose.Schema({
    nameAssociation: {
        type: String,
        require: true

    },

    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],


})

module.exports = mongoose.model('Association', AssociationSchema)