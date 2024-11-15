const express = require("express");
const router = express.Router();
const countries = require("./countries.js");

router.use("/countries", countries);

module.exports = router;
