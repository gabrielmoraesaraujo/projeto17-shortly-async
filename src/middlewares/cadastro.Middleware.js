import {db} from '../database/database.js'
import { createCadastroSchema } from "../schemas/cadastro.Schema.js"

export async function validCadastro(req,res,next){

    console.log(req.body)
    const cadastro = req.body

    const {error} = createCadastroSchema.validate(cadastro)

    if(error){
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({errors})
    }

    const cadastroExists = await db.query('SELECT * FROM users WHERE name=$1', [cadastro.name])

    if(cadastroExists.rowCounts !=0 ) return res.sendStatus(409)

    res.locals.cadastro = cadastro

    next()
}