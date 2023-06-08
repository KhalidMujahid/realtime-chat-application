const { Router } = require("express");
const {
  helloWorld,
  renderEJS,
  signUp,
  login,
  handleLogin,
  handleSignUp,
} = require("../controllers/router.controller");
const {
  loginValidationMiddleware,
} = require("../middlewares/loginvalidation.middleware");
const {
  signUpValidationMiddleware,
} = require("../middlewares/signupvalidation.middleware");

const router = Router();

router.get("/hello", helloWorld);

router.get("/", renderEJS);

router.get("/register", signUp);

router.get("/login", login);

// POST REQUEST
// Login
router.post("/login", loginValidationMiddleware, handleLogin);

// Sign up
router.post("/register", signUpValidationMiddleware, handleSignUp);

module.exports = router;
