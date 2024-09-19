import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { appRouter } from "./routes/user.route";


dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
.then(()=> console.log(`DB connection established`))
.catch(()=> console.log("Some Error happened during DB connection"))

app.get("/api/", (req:Request, res:Response)=>{

    res.status(200).json({"message": "Welcome!"});

})  

app.use("/api/user", appRouter);

app.listen(PORT, ()=>{

    console.log(`Server listening on ${PORT}`);

})
