const express = require('express');
const router = express.Router();
const influencerController = require('../controllers/influencerController');

router.get('/influencer/:username', influencerController.fetchTweets);

module.exports = router;
