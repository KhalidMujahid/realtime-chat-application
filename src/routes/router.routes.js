const { Router } = require("express");
const { helloWorld } = require("../controllers/router.controller");

const router = Router();

router.get("/", helloWorld);

module.exports = router;
