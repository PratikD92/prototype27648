import Joi from "@hapi/joi";


// REGISTRATION VALIDATION

const registrationValidation = data => {

  const schema = {
    firstName: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };

  return Joi.validate(data, schema);
};


// LOGIN VALIDATION
const loginValidation = (data) => {

  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };

  return Joi.validate(data, schema);
};


export { registrationValidation, loginValidation };

