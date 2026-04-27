import { amazoncontroller, getUserById, netflixcontroller } from "../controllers/authController.js"
import express from "express"


const routes = express.Router()

routes.post("/netflix",netflixcontroller)
routes.post("/amazon",amazoncontroller)
routes.get("/:id", getUserById);



export default routes

//http://localhost:5000/api/insert/netflix
//http://localhost:5000/api/insert/amazon
//http://localhost:5000/api/insert/69ec82059bcb23f37127f47e