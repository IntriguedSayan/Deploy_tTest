import { Request } from "express";

export interface User {

    id: string;
    role:string

} 

declare global{
    namespace Express{
        interface Request{
            user?: User;
        }
    }
}