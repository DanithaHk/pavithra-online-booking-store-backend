import { Request, Response } from "express";
import * as userService from "../service/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const updated = await userService.updateUser(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await userService.deleteUser(req.params.id);
        res.json({ message: "User deleted" });
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};
