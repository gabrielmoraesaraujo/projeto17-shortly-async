import {db} from '../database/database.js'
import { createLoginSchema } from "../schemas/login.Schema"

export async function validLogin(req,res,next){

    console.log(req.body)
    const login = req.body

    const {error} = createLoginSchema.validate(login)

    if(error){
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({errors})
    }

    const LoginExists = await db.query('SELECT * FROM users WHERE name=$1', [login.name])

    if(loginExists.rowCounts !=0 ) return res.sendStatus(409)

    res.locals.login = login

    next()
}