import express from "express"
import { authcontroller } from "../controlers/authcontroller.js"

const route = express.Router()

route.post("/newdata",authcontroller)

export default route

//http://localhost:5000/api/create/newdata