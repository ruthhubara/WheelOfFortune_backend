
const { ExpressLoader } = require("./loaders/express");
const { connectDB } = require('./loaders/mongoose');
// const { SocketLoader } = require('./loaders/socket')
new ExpressLoader();
// new SocketLoader()

connectDB();


