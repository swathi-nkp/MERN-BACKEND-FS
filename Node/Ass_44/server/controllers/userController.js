import User from "../models/userSchema.js";
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

   const existingUser = await User.findOne({ email });
   console.log(existingUser)

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password,(10));
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

   
    if (error.name === "ValidationError") {
      const errors = {};

      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }

      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors
      });
    }

    
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

