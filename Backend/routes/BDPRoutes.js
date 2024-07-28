const express = require("express");
const { addBDPData } = require("../controllers/BDPController");
const router = express.Router();

router.post("/addBDP", addBDPData)
module.exports = router;