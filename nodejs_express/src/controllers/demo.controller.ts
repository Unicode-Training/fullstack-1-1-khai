import { Request, Response } from "express";
import { demoService } from "../services/demo.service.js";

export const demoController = {
    async calcFibonacci(req: Request, res: Response) {
        const { value } = req.body;
        const data = await demoService.calcFibonacci(value);
        return res.json({
            data
        })
    }
}