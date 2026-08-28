import { Request, Response } from "express";
import { authService } from "../services/auth.service.js";

export const authController = {
    async register(req: Request, res: Response) {
        const data = await authService.register(req.body)
        return res.json({
            data,
            success: true
        })
    },
    async login(req: Request, res: Response) {
        const data = await authService.login(req.body)
        return res.json({
            data,
            success: true
        })
    }
}