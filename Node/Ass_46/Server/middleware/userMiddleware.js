import usermodel from "../model/authModel.js"

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
