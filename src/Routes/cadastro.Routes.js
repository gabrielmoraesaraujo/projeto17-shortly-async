import {Router} from "express";
import {create} from "../controllers/cadastroController.js"
import { validCadastro } from "../middlewares/cadastro.Middleware.js";
 

const cadastroRoute = Router();

cadastroRoute.post('/cadastro', validCadastro, create); //Rota de cadastro


export default cadastroRoute;