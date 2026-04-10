import http from "http"
import dotenv from "dotenv"

import { createFile,Readfile,Adddata,Removefile} from "./file.js"

dotenv.config()

const app = http.createServer()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    
    console.log(`server running successfully ${PORT}`)

})

createFile()
Readfile()
Adddata()
Readfile()
Removefile()
