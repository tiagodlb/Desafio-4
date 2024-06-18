import Joi from "joi";

/*
  Database Schema

  email    String   
  name     String
  nickname String 
  password String
  birthday DateTime

  */

/* Cadastro */
export const signUpSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    password: Joi.string().required(),
    birthday: Joi.string().required()
})

/* Login */
export const signInSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});