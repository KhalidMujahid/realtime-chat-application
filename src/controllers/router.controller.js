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
    const hashedPassword = await bcrypt.hash(password, 13);
    const user = User({
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

    if (!user) res.status(401).send("Invalid Credentials");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(401).send("Invalid Credentials");
    }
    res.status(200).send("Login Successful...");
    console.log(user);
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
