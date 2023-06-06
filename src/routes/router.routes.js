const { Router } = require("express");
const { helloWorld, renderEJS, signUp } = require("../controllers/router.controller");

const router = Router();

router.get("/hello", helloWorld);

router.get("/", renderEJS);

router.get('/register', signUp)

module.exports = router;
