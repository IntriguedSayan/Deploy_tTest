import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";


export interface User extends Document{
    email: string;
    password: string;
    role: string;
}


const userSchema:Schema = new mongoose.Schema({
    email: {type: String, required: true},
    password:{type: String, required: true},
    role: {type: String, required: true, enum:["admin", "user"], default:"user"}
})

userSchema.pre<User>("save", async function(next){

    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 8);
    next();

})


const UserModel = mongoose.model<User>("user", userSchema);

export {UserModel};