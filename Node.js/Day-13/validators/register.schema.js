const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .message(
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'
    )
    .required(),

  age: Joi.number()
    .integer()
    .min(18)
    .required()
});

module.exports = registerSchema;
