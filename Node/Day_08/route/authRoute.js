import express from "express"
import { newdata } from "../controller/authController.js"

const route = express.Router()

route.post("/newdata",newdata)


export default route

// http://localhost:5000/api/create/newdata