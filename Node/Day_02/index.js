import http from "http"
import dotenv from "dotenv"


dotenv.config()

const port = process.env.port || 3000

console.log(process);

const app = http.createServer()

app.listen(port, ()=>{
    console.log(`server running successfully http://localhost:${port}`);
    

})

