const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countries.js");

router.get("/available-countries", countriesController.getAvailableCountries);
router.get("/country-info/:code", countriesController.getCountryInfo);

module.exports = router;
