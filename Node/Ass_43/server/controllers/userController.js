import user from "../models/userSchema.js";


 export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await user.create({
      name,
      email,
      age
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: user
    });

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}