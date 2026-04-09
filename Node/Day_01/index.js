import { log } from 'console'
import http from 'http'

const app = http.createServer()

app.listen(5000,()=>{
    console.log('runing sucessfully http://localhost:5000')
    

})

