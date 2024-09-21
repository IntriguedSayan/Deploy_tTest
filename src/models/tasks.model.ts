import mongoose, { Document, Schema } from "mongoose";

export interface Tasks extends Document{
    title: string;
    description: string;
    user: mongoose.Schema.Types.ObjectId;
}


const taskSchema:Schema = new mongoose.Schema({
    title: {type: String, required: true},
    description:{type: String, },
    user: {type:mongoose.Schema.Types.ObjectId, ref:"user" , required:true}
})


const TaskModel = mongoose.model<Tasks>("task", taskSchema);

export {TaskModel};