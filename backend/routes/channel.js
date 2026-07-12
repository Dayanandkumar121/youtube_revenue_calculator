const express = require("express");
const router = express.Router();

const {
  getChannel,
} = require("../controllers/channelController");

// GET /api/channel
router.get("/", getChannel);

module.exports = router;