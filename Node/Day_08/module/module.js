import mongoose from "mongoose"



const list = new mongoose.Schema({
    name:{
        type:"string",
        required:true,
        unique:true

    },
    age:{
        type:"string",
        required:true,
        unique:true
    },
    createdAt:{
        type:"string",
        default:"BY swathi"

    },
    
    updatedAt:{
        type:"string",
        default:"BY swathi"

    }

},{timestamps:true})

const connect = mongoose.model("connect",list)

export default connect