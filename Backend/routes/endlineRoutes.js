const express = require("express");
const { getAllEndlineData, addEndLineData, getSingleEndlineData } = require("../controllers/endLineController");
const router = express.Router();

router.get("/getAllEndline", getAllEndlineData);
router.get("/getEndline/:id", getSingleEndlineData);
router.post("/addEndline", addEndLineData);

module.exports = router;