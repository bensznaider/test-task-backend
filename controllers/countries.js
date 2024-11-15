const axios = require("axios");
require("dotenv").config();

const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `https://date.nager.at/api/v3/AvailableCountries`,
      headers: {
        accept: "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getCountryInfo = async (req, res) => {
  const code = req.params.code;

  try {
    const firstReq = await axios.request({
      method: "GET",
      url: `${process.env.INFO_REQUEST_URL}/${code}`,
      headers: {
        accept: "application/json",
      },
    });

    const secondReq = await axios.request({
      method: "POST",
      url: `${process.env.FLAG_REQUEST_URL}`,
      headers: {
        accept: "application/json",
      },
      data: { iso2: code },
    });

    const thirdReq = await axios.request({
      method: "POST",
      url: `${process.env.POPULATION_REQUEST_URL}`,
      headers: {
        accept: "application/json",
      },
      data: { country: secondReq.data.data.name },
    });

    res.json({
      borderCountries: firstReq.data.borders,
      flagURL: secondReq.data.data.flag,
      populationCounts: thirdReq.data.data.populationCounts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
