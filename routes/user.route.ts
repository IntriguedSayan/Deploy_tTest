import express, { Request, Response } from "express";

const appRouter = express.Router();

appRouter.get("/",(req:Request,res:Response)=>{

    res.status(200).json({message:"From user route"});

})

export {appRouter};