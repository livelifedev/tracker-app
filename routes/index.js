const express = require("express");
const router = express.Router();
const PagesController = require("./../controllers/pages_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const PigeonController = require("./../controllers/pigeon_controller");

router.get("/", PagesController.home);
router.get("/about", PagesController.about);

router.get("/register", AuthenticationController.registerNew);
router.post("/register", AuthenticationController.registerCreate);
router.get("/dashboard", PagesController.dashboard);

router.get("/pigeons", PigeonController.index);
router.get("/pigeons/new", PigeonController.make);
router.post("/pigeons", PigeonController.create);
router.get("/pigeons/:id", PigeonController.show);
router.delete("/pigeons/:id", PigeonController.destroy);

router.post("/pigeons/:id/activity", PigeonController.activity);

module.exports = router;