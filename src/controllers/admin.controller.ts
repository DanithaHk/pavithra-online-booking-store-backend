import { Request, Response } from "express";
import { getAllUsersService } from "../service/admin.service";

export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Failed to get users", error: err });
    }
};