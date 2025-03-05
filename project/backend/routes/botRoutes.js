const express = require("express");
const { deployBot, stopBot } = require("../controllers/botController");
const router = express.Router();

router.post("/deploy", deployBot);
router.post("/stop", stopBot);

module.exports = router;
