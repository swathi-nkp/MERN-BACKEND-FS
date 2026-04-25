import { amazoncontroller, netflixcontroller } from "../controllers/authController.js"
import express from "express"


const routes = express.Router()

routes.post("/netflix",netflixcontroller)
routes.post("/amazon",amazoncontroller)


export default routes

//http://localhost:5000/api/insert/netflix
//http://localhost:5000/api/insert/amazon