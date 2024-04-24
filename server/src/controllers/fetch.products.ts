import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    try {
        return res.send({
            message: "ok fine from controller"
        })
    } catch (error) {
        
    }
}