import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  skills: [String],
  NewData: {
    name: String
  }
});

const users = mongoose.model("array", userSchema)

export default users 