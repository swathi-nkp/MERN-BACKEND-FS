import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()

const PORT = process.env.port || 3000

app.listen(PORT,()=>{
    console.log(`server running sucessfully ${PORT}`);
})
