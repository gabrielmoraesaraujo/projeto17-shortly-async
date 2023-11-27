import { db } from '../database/database.js'

export async function create(req,res){
    const { name, email, password, confirmPassworld} = res.locals.cadastro
    try{
      await db.querry(`
      INSERT INTO users (name, email, passworld, "confirmPassworld")
      VALUES ($1, $2, $3, $4);
      `, [name, email, password, confirmPassworld])
      
      res.status(201)
    } catch (error){
        res.status(500).send(error.message)
    }
}