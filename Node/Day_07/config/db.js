import mongoose from "mongoose";

const connectDb = async() =>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected sucessfull${conn.connection.host}`);
        
    } catch (error) {
        console.log("something error",error);
        process.exit(0)
        
    }
}

export default connectDb