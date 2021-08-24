const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
const connectDB = () => {
    mongoose.connect("mongodb+srv://wheeloffortunerpojectp:wheeloffortunerpojectp@cluster0.dcp0e.mongodb.net/wheeloffortunerpoject?retryWrites=true&w=majority", connectionParams)
        .then(() => {
            console.log('MongoDB Connection Succeeded.');
        })
        .catch((error) => {
            console.log('Error in DB connection: ' + error)
        });
}

module.exports = { connectDB }

