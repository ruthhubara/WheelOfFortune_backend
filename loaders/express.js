const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const request = require("request");
const cookieParser = require('cookie-parser')
const apiRouter = require("../routes/api")
const viewsRouter = require('../routes/views');
const cors = require("cors");
//socketServer(http);
const app = express();
// setSocket();
const dotenv = require('dotenv')


class ExpressLoader {
    constructor() {
        dotenv.config()
        app.use(cookieParser());
        app.use(express.static('public'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.static(path.join(__dirname, './build')));
        app.use(bodyParser.json());
        app.use('/api', apiRouter)
        // app.use('/*', viewsRouter)
        let senderStream;
        this.server = app.listen(3033, () => {
            console.log(`Express running, now listening on port 3033`);

        });
    }

    get Server() {
        return this.server;
    }
}


module.exports = { ExpressLoader };