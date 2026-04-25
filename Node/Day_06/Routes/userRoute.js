import express from "express"
import { createRoute, getData } from "../controller/createRoute.js"

const route = express.Router()

route.post("/created",createRoute)
route.get("/created/:userid",getData)

export default route

//http://localhost:5000/api/create/created