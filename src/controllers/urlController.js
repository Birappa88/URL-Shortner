const mongoose = require("mongoose");
const urlModel = require("../models/urlModel");
const validator = require("validator");

const shortURL = async (req, res) => {
  try {
    let url = req.body.longUrl;
    if (!url) {
      return res
        .status(400)
        .send({ status: false, message: "longUrl is missing" });
    }
    if (typeof url != "string") {
      return res
        .status(400)
        .send({ status: false, message: "longUrl should must be a string" });
    }
    if (!validator.isURL(url)) {
      return res
        .status(400)
        .send({ status: false, message: "longUrl is not a valid URL" });
    }

    let findUrl = await urlModel
      .findOne({ longUrl: url })
      .select({ longUrl: 1, shortUrl: 1, urlCode: 1, _id: 0 });

    if (findUrl) {
      return res.status(200).send({ status: true, data: findUrl });
    }

  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false, message: err.message });
  }
};

const getURL = async (req, res) => {};

module.exports = {
  shortURL,
  getURL,
};
