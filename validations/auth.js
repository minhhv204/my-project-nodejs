import Joi from "joi";

const registerValidate = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username không được bỏ trống",
    "string.min": "Username phải có ít nhất 3 ký tự",
    "string.max": "Username không được vượt quá 10 ký tự",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "email  không được bỏ trống",
    "string.email": "Ko dung dinh dang email",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "any.required": "password  không được bỏ trống",
    "string.min": "password  phải có ít nhất 6 ký tự",
    "string.max": "password không được vượt quá 20 ký tự",
  }),
  image: Joi.string(),
  role: Joi.string()
  
}).options({
  abortEarly: false,
}).with('username', 'role');
const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidate,loginValidator };