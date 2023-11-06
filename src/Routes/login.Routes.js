import {Router} from "express";
import {create} from "../controllers/cadastroController.js" // alterar
import { validCadastro } from "../middlewares/cadastro.Middleware.js"; //alterar
 

const loginRoute = Router();

loginRoute.post('/login', validLogin, create); //Rota de cadastro


export default loginRoute;