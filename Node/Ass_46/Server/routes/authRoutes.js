import { resgisterpage } from "../controller/authController.js"
import express from "express"
import { validuser } from "../middleware/userMiddleware.js"

const routes = express.Router()

routes.post("/resgister",validuser,resgisterpage)


export default routes

//http://localhost:5000/api/user/resgister