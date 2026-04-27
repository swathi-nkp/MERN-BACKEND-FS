import { arrayValue } from "../controllers/authController.js"
import express from "express"


const routes = express.Router()

routes.post("/array",arrayValue)

export default routes

//http://localhost:5000/api/insert/array
