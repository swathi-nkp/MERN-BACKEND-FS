import mongoose, { model, Schema } from "mongoose";

const createdata = new mongoose.Schema({
name:String,
age:Number,
email:String,
createdBy:{
    type:"string",
    default:"admin"
},
updatedBy:{
    type:"string",
    default:"admin"
}
},{timestamps:true})

const addingData = mongoose.model("createdata",createdata)

export default addingData 