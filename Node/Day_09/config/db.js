import mongoose, { connect} from "mongoose";

const newdb = async()=>{
    const conn = await connect(process.env.MONGO_URI)
    console.log("connected succefully");
    
}

export default newdb