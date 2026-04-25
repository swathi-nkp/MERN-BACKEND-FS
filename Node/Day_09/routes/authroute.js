import express, { Router } from "express"
import { adddata, getdata} from "../controller/authcontroller.js"

const route = express.Router()

route.post("/adddata",adddata)
route.get("/getdata", getdata)

export default route


//http://localhost:5000/api/createdata/adddata
//http://localhost:5000/api/createdata/getdata

