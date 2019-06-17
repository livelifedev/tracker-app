const express = require("express");
const router = express.Router();
const PagesController = require("./../controllers/pages_controller");
const PigeonController = require("./../controllers/pigeon_controller");

router.get("/", PagesController.home);
router.get("/about", PagesController.about);

router.get("/pigeons", PigeonController.index);

module.exports = router;