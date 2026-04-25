import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoute from "./route/authRoute.js"
import { newdb } from "./config/db.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

newdb()

app.use("/api/create",authRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connected successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/create