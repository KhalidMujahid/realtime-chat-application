const { Router } = require("express");
const { helloWorld, renderEJS } = require("../controllers/router.controller");

const router = Router();

router.get("/hello", helloWorld);

router.get("/", renderEJS);

module.exports = router;
