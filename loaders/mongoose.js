const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
const connectDB = () => {
    mongoose.connect("mongodb://leaderDeveloper:leader2020@cluster0-shard-00-00.iutps.mongodb.net:27017,cluster0-shard-00-01.iutps.mongodb.net:27017,cluster0-shard-00-02.iutps.mongodb.net:27017/WheelOfFortuneDB?ssl=true&replicaSet=atlas-14f3hd-shard-0&authSource=admin&retryWrites=true&w=majority", connectionParams)
        .then(() => {
            console.log('MongoDB Connection Succeeded.');
        })
        .catch((error) => {
            console.log('Error in DB connection: ' + error)
        });
}

module.exports = { connectDB }

