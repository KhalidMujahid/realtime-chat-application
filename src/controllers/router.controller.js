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
const handleLogin = (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

const handleSignUp = (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  helloWorld,
  renderEJS,
  signUp,
  login,
  handleLogin,
  handleSignUp,
};
