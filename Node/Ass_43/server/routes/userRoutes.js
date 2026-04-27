import express from "express"
const router = express.Router();

import { createUser } from  "../controllers/userController.js"

router.post("/create1", createUser);

export default router

//http://localhost:5000/api/insert/create1
