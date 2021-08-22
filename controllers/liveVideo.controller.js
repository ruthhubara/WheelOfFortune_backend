const LiveVideo = require('../models/liveVideo.model');
const repository = require('../repository/repository')

const createVideo = async (req, res) => {
    try {
        const video = req.body
        newVideo = new LiveVideo(video)
        let statistic = await repository.createObject(Statistic, video.statistic)
        await repository.saveObject(statistic)
        res.status(200).send({ message: "save video", newVideo: newVideo });
    }
    catch (error) {
        console.log("Can't save this video with error: " + error);
    }
}
module.exports = {
    createVideo,
};