const express = require("express")
const urlController = require("../controllers/urlController")
const router = express.Router()

// -----++++-----=+=-------[ APIs ]-----=+=-----+++++------ //

// ------------(POST Api to create Short-url)----------- //
router.post("/url/shorten",urlController.shortURL)

// ------------(GET Api to redirect through Short-url)----------- //
router.get("/:urlCode",urlController.getURL)


// ------------(Invalid Routes will be handled here)----------- //
router.all("*", function (req, res) {
    res.status(404).send({ status: false, message: "You're on a wrong route" });
  });

module.exports = router

// -----++++-----=+=-------****************-----=+=-----+++++------ //