const helloWorld = (req, res) => res.status(200).send("Hello World");

const renderEJS = (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    next(error);
  }
};

const signUp = (req, res) => {
  return res.status(200).render('signup')
}

const login = (req, res) => {
  return res.status(200).render('login')
}
module.exports = {
  helloWorld,
  renderEJS,
  signUp,
  login
};
