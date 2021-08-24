const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({

    videoUrl: {
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

module.exports = mongoose.model('video', VideoSchema)