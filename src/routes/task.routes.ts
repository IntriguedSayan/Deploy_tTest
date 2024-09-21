import express from "express";
import { createTaskController, getTaskController } from "../controllers/task.controller";
import { authorize } from "../middleware/authorize.middleware";


const taskRouter = express.Router();

taskRouter.get("/", authorize, getTaskController);
taskRouter.post("/create", authorize, createTaskController)




export {taskRouter};