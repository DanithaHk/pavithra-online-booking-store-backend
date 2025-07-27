import express from "express";
import {createUser, deleteUser, getAllUsers, updateUser} from "../service/user.service";


const router = express.Router();

// Admin routes
router.get("/admin/users", getAllUsers);
router.post("/admin/users", createUser);
router.put("/admin/users/:id", updateUser);
router.delete("/admin/users/:id", deleteUser);

export default router;
