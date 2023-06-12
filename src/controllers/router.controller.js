const bcrypt = require("bcrypt");
const User = require("../models/users.model");

const helloWorld = (req, res) => res.status(200).send("Hello World");

const renderEJS = (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    next(error);
  }
};

// get request
const signUp = (req, res) => {
  res.status(200).render("signup", { error: null, title: "Sign up page" });
};

// get request
const login = (req, res) => {
  res.status(200).render("login", { error: null, title: "Login page" });
};

// post request

const handleSignUp = async (req, res, next) => {
  try {
    const { fullname, username, password } = req.body;
    const existingUser = User.findOne({ username });
    if (existingUser) {
      res.status(400).render("signup", {
        error: "Username already exists, please pick another.",
        title: "Error | Sign up page",
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 13);
    const user = new User({
      fullname,
      username,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.status(200).send(savedUser);
    console.log(savedUser);
  } catch (error) {
    next(error);
  }
};
const handleLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).render("login", {
        error: "username does not exist or password is incorrect.",
        title: "Error | Sign up page",
      });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400).render("login", {
        error: "username or password is incorrect.",
        title: "Error | Sign up page",
      });
      return;
    }
    res.status(200).send("Login Successful...");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  helloWorld,
  renderEJS,
  signUp,
  login,
  handleSignUp,
  handleLogin,
};
