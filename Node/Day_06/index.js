import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./Routes/userRoute.js"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/create",userRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("server connected http://localhost:${PORT}")
})

//http://localhost:5000/api/create

