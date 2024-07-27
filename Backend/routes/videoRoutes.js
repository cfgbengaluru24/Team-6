const express = require("express");
const {
  uploadVideo,
  getAllVideos
} = require("../controllers/videoController");

const router = express.Router();

router.route("/").post(uploadVideo).get(getAllVideos);

module.exports = router;
