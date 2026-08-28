import { Request, Response } from "express";
import { courseService } from "../services/course.service.js";

export const courseController = {
    async create(req: Request, res: Response) {
        const data = await courseService.create(req.body);
        return res.json({
            data,
            success: true
        })
    }
}