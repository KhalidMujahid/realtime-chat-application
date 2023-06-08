const { signUpValidation } = require("../utils/validator.utils");

module.exports.signUpValidationMiddleware = (req, res, next) => {
  const { error, value } = signUpValidation.validate(req.body);

  if (error) {
    res.status(422).render("signup", {
      error: error.details[0].message,
      title: "Error | Sign up page",
    });
  }

  //   check if password and confirm password are the same
  const { password, cpassword } = value;

  if (password !== cpassword) {
    res.status(400).render("signup", {
      error: "Password and confirm password must be the same",
      title: "Error | Sign up page",
    });
  }

  req.body = value;
  next();
};
