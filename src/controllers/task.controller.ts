import { Request, Response } from "express";
import { TaskModel } from "../models/tasks.model";


const createTaskController = async(req:Request, res:Response) =>{

    const task = new TaskModel({title:req.body.title, user: req.user?.id});
    await task.save();
    res.status(201).json({message:"Task created successfully"});
}   

const getTaskController = async(req:Request, res: Response) =>{

    const tasks = await TaskModel.find({user: req.user?.id});
    res.status(200).json({tasks: tasks});

}


export {createTaskController, getTaskController}