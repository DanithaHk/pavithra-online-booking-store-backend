import {User} from "../model/user.model";


export const getAllUsers = async () => {
    return await User.find();
};

export const createUser = async (userData: any) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error("User already exists");
    return await User.create(userData);
};

export const updateUser = async (id: string, userData: any) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
};
