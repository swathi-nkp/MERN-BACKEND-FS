import usermodel from "../model/authModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const validuser = async(req,res,next) => {

    const{username,useremail,password}= req.body
    
    
        const checkEmail = await usermodel.findOne({useremail})

        if(checkEmail){
            res.status(404).json({msg:"already in use,use different email"})
            return
        }


        if(!username || !useremail || !password){
            res.status(404).json({msg:"pls fill the datas"})
        }
   
        if(password.length < 8){
            res.status(404).json({msg:"password should be atleast 8 character"})
        }
    
        next()


}

export const validlogin = async(req,res,next)=>{


    try {
        const {useremail,password}= req.body

      const checkEmail = await usermodel.findOne({useremail})

      if(!checkEmail){
        res.status(404).json({msg:"email incorrect"})
      }


      const checkpassword = bcrypt.compare(password,checkEmail.password)

      if(!checkpassword) {
       res.status(404).json({msg:"password incorrect"})
      }

      const token = await jwt.sign({id:checkEmail._id,email:checkEmail.useremail},process.env.JWT_SECURE,{expiresIn:"1h"})

         console.log(token);
  
         res.status(200).json({msg:"token created",token})


    } catch (error) {


          console.log('error',error);
    }

    next()
}

export const checktoken = async(req,res,next)=>{

    try {
        const token = req.headers.authorization

        if(!token){
            res.status(401).json({msg:"invalid token"})
        return
        }

        const checkjwt = jwt.verify(token,process.env.JWT_SECURE)
        req.users = checkjwt

    } 
    

    catch (error) {
         
         console.log('error',error);
        res.status(404).json({msg:"Your Token is broken kindly login again"})


    }
    next()

}
