const asyncHandler = require("express-async-handler");
const Video = require("../models/videoModel.js");

const uploadVideo = asyncHandler(async (req, res) => {
    const { name, videoUrl } = req.body;
    
    const video = await Video.create({
        name,
        videoUrl,
    });
    
    if (video) {
        res.status(201).json({
        _id: video._id,
        name: video.name,
        videoUrl: video.videoUrl,
        });
    } else {
        res.status(400);
        throw new Error("Failed to upload video");
    }
})

const getAllVideos = asyncHandler(async (req, res) => {
    
    const video = await Video.find();
    
    res.status(200).json(video);
})

module.exports = { uploadVideo,getAllVideos };
