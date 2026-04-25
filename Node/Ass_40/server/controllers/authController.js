import User from "../models/netflixSchema.js";

export const netflixcontroller = async(req,res)=>{

  try {
    const { username, email, password, subscriptionType, profiles } = req.body;

    console.log(req.body);
    

    await User.create({
      username,
      email,
      password,
      subscriptionType,
      profiles
    });

    res.status(200).json({
      msg: "Successfully inserted"
    });

  } catch (error) {
    res.status(500).json({
      msg: "Error inserting data",
      error: error.message
    });


  }
}

export const amazoncontroller = async(req,res) => {

  try {
    const { title, price, description, category, stock, ratings } = req.body;

    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      stock,
      ratings
    });

    res.status(201).json({
      msg: "Product inserted successfully",
      data: newProduct
    });

  } catch (error) {
    res.status(500).json({
      msg: "Error inserting product",
      error: error.message
    });
}


}