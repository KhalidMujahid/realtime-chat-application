const helloWorld = (req, res, next) => {
  return res.status(200).send("Hello World");
};

module.exports = {
  helloWorld,
};
