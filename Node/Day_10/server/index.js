import express from "express" 
import dotenv from "dotenv"
import cors from "cors"
import authroutes from "./routes/authroutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/create",authroutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})
