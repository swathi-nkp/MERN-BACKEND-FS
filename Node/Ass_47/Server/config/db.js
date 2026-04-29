import mongoose from "mongoose";


const connectDb = async()=>{
    try {
        
        const conn = mongoose.connect(process.env.MONGO_URI)

        console.log(`Db connected on `);
    

    } catch (error) {
       
        console.log('Error',error);
         process.exit(0)

    }
}


export default connectDb