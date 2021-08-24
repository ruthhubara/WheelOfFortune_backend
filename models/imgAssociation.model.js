const mongoose = require('mongoose');

const ImgSchema = mongoose.Schema({

    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },

    associationId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Association' }],


})

module.exports = mongoose.model('Img', ImgSchema)