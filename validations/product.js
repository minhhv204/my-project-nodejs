import Joi from "joi";

const registerProduct = Joi.object({
    name: Joi.string().min(3).max(10).required().messages({
        "any.required": "name không được bỏ trống",
        "string.min": "name phải có ít nhất 3 ký tự",
        "string.max": "name không được vượt quá 10 ký tự",
    }),
    image: Joi.string().required().min(3).max(10).messages({
        "any.required": "image không được bỏ trống",
        "string.min": "image phải có ít nhất 3 ký tự",
        "string.max": "image không được vượt quá 10 ký tự",
    }),

}).options({
    abortEarly: false,
});
export{registerProduct};
