import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    password:String
},{timestamps:true})

const usermodel = mongoose.model("middlewarelogin",authSchema)

export default usermodel