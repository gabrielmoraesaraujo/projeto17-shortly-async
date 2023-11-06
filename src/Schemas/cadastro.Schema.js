import joi from "joi";

export const createCadastroSchema = joi.object({
    
      name: joi.string().min(2).required(),
      email: joi.string().min(6).required(),
      password: joi.string().min(2).required(),
      confirmPassword: joi.string().min(2).required()
    
});