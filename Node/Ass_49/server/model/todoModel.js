import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    taskName:String,
    taskType:String,
    taskStatus:{
        type:Number,
        default:0
    }

})

const todomodel = mongoose.model("todoList",todoschema)

export default todomodel
