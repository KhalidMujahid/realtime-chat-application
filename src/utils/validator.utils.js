const Joi = require("joi");

const loginValidtion = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const signUpValidation = Joi.object().keys({
  fullname: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
  cpassword: Joi.string().required().min(6),
});

module.exports = {
  loginValidtion,
  signUpValidation,
};
