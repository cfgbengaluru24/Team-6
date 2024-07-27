const mongoose = require("mongoose");

const videoModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    videoUrl: { type: String, required: true }
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoModel);

module.exports = Video;
