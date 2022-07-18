const express = require("express")
const urlController = require("../controllers/urlController")
const router = express.Router()

// POST API TO CREATE A SHORT URL
router.post("/url/shorten",urlController.shortURL)

//GET API TO GT THE SHORT URL

module.exports = router