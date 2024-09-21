import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { generateToken } from "../utils/token";
import bcrypt from "bcryptjs";



// Register
const register = async (req: Request, res: Response) => {

    const { username, email, password } = req.body;
    const user = new UserModel({ username, email, password });
    await user.save();
    res.send({message: "User have been created successfully"});

};
  
//   Login
const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ token: generateToken(user._id as string, user.role) });
};
  

export {register, login};