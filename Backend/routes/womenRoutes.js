
const express = require('express');
const { fetchAllWomen, fetchSingleWomen, addWomen } = require('../controllers/womenController');

const router = express.Router();

router.get('/fetchAllWomen', fetchAllWomen);
router.get('/fetchWomen/:id', fetchSingleWomen);
router.post('/addWomen', addWomen);

module.exports = router;