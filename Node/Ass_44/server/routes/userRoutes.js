import express from "express"
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);

export default router

//http://localhost:5000/api/insert/register
