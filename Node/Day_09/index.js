import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authroute from "./routes/authroute.js"
import newdb from "./config/db.js"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/createdata",authroute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("server connected sucessfully http://localhost:${PORT}");
    
})



newdb()
//http://localhost:5000/api/createdata
