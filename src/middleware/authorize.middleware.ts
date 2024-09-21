
import { Request, Response, NextFunction } from "express" 

export const authorize = (req:Request, res:Response, next:NextFunction) =>{

    const roles = ["admin", "user"]
    
        if(!roles.includes(req.user?.role as string)){
            return res.status(404).json({message: "Forbidden"});
        }
        next();
    


}