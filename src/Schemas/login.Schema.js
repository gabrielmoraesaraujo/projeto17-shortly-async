import joi from "joi";

export const createLoginSchema = joi.object({

    email: joi.string().min(6).required(),
    password: joi.string().min(2).required()
      
});