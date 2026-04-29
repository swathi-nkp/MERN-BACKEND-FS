import usermodel from "../model/authModel.js"
import bcrypt from "bcrypt"

export const resgisterpage = async(req,res) =>{

    const {username,useremail,password}=req.body

    try {
        const hashedpassword = await bcrypt.hash(password,10)
        const added = await usermodel.create({username,useremail,password:hashedpassword})
        res.status(201).json({msg:"sucessfully created"})

    } catch (error) {
        
        console.log("error",error);
        
    }
}