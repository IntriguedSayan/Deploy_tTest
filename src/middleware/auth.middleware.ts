

import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";
import { User } from "../types";


export const authenticate = (req: Request, res: Response, next: NextFunction) =>{

    const token = req.headers.authorization?.split(" ")[1];
    
    if(!token){
        return res.status(403).json({message: "Unzuthorized"});
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded as User;
        next();
    }catch(err:any){
        res.status(500).json({message: err.message});
    }

}