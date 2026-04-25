import addingData from "../model/addmodule.js";

export const adddata = async(req,res)=>{

    try {
        // console.log(req.body);
        const {name,age,email} = req.body

        const adding = await addingData.create({name,age,email})
        res.status(200).json({msg:"sucessfully"})
        
    } catch (error) {
        console.log("error".error);
        res.status(500).json({msg:"error",error})
        
    }


}

export const getdata = async(req,res)=>{

try {
  //const {name,age,email} = req.body
    const edit = await addingData.find()
    res.status(200).json({msg:"sucessfully",data:edit})
        
    } catch (error) {
        console.log("error".error);
        res.status(500).json({msg:"error",error})
        
    }


}