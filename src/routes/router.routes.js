const { Router } = require("express");
const { helloWorld, renderEJS, signUp, login } = require("../controllers/router.controller");

const router = Router();

router.get("/hello", helloWorld);

router.get("/", renderEJS);

router.get('/register', signUp)

router.get('/login', login)

module.exports = router;
