const helloWorld = (req, res) => {
  return res.status(200).send("Hello World");
};

const renderEJS = async (req, res, next) => {
  try {
    return res.status(200).render("index");
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
