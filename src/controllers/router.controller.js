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

module.exports = {
  helloWorld,
  renderEJS,
};
