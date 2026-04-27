import users from "../models/Arrayschema.js";

export const arrayValue = async (req, res) => {
  try {
    const {name,mobile,email,skills,NewData} = req.body

    const adding = await users.create({name,email,skills,NewData})
    console.log(adding);
    
    res.status(201).json({msg:"created sucessfully" });
    
  } catch (error) {
    res.status(500).json({msg: "error",error});
  }
};

