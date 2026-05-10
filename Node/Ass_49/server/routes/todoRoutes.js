import express from "express"
import {create} from '../controller/todoController.js'


const routes = express.Router()

routes.post("/create",create)

export default routes 


//http://localhost:5000/api/todolist