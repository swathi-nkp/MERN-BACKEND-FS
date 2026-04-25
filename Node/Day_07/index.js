import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authroute from "./routes/authroute.js"
import connectDb from "./config/db.js"

dotenv.config()

connectDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/create",authroute)
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    
    console.log(`server connected http://localhost:${PORT}`);
    
})

//http://localhost:/api/create