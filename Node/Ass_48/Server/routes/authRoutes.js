import { dashboardpage, loginpage, resgisterpage } from "../controller/authController.js"
import express from "express"
import { checktoken, validlogin, validuser } from "../middleware/userMiddleware.js"

const routes = express.Router()

routes.post("/resgister",validuser,resgisterpage)
routes.post("/login",validlogin,loginpage)
routes.get("/dashboard",checktoken,dashboardpage)


export default routes

//http://localhost:5000/api/user/resgister
//http://localhost:5000/api/user/login
//http://localhost:5000/api/user/dashboardpage
