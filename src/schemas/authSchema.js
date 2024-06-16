import Joi from "joi";

/* Cadastro */
export const signUpSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required()
})

/* Login */
export const signInSchema = Joi.object({
    email: Joi.string().required(),
});