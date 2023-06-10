const { loginValidtion } = require("../utils/validator.utils");

module.exports.loginValidationMiddleware = (req, res, next) => {
  const { error, value } = loginValidtion.validate(req.body);

  if (error) {
    res.status(422).render("login", {
      error: error.details[0].message,
      title: "Error | Login page",
    });
  }
  req.body = value;
  next();
};
