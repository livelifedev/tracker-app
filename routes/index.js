const express = require("express");
const router = express.Router();
const PagesController = require("./../controllers/pages_controller");

router.get("/", PagesController.home);
router.get("/about", PagesController.about);

module.exports = router;