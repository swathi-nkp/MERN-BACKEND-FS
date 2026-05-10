import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import todoroutes from './routes/todoRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/todolist",todoroutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`sever connect on http://localhost:${PORT}`);
    
})

connectDb()

//http://localhost:5000/api/todolist