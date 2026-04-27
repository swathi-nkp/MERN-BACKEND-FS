import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/create", createUser);
router.get("/get", getAllUsers);
router.get("/getid/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router

//http://localhost:5000/api/insert/create
//http://localhost:5000/api/insert/get
//http://localhost:5000/api/insert/getid
//http://localhost:5000/api/insert/update
//http://localhost:5000/api/insert/delete