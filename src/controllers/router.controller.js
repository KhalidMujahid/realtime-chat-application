const bcrypt = require("bcrypt");
const User = require("../models/users.model");

const helloWorld = (req, res) => res.status(200).send("Hello World");

const renderEJS = (req, res, next) => {
  try {
    res.status(200).render("index", { title: "Home Page" });
  } catch (error) {
    console.log(error);
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
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).render("signup", {
        error: "Username already exists, please pick another.",
        title: "Error | Sign up page",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 13);
    const user = new User({
      fullname,
      username,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    return res.status(200).send(savedUser);
  } catch (error) {
    next(error);
  }
};
const handleLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).render("login", {
        error: "username does not exist or password is incorrect.",
        title: "Error | Sign up page",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).render("login", {
        error: "username or password is incorrect.",
        title: "Error | Sign up page",
      });
    }
    return res.status(301).redirect("/dashboard");
  } catch (error) {
    next(error);
  }
};

const renderDashboard = (req, res, next) => {
  try {
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
  renderDashboard,
};
