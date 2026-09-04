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
    },
    async profile(req: Request, res: Response) {
        return res.json({
            data: req.user,
            success: true,
            message: "Get profile success"
        });
    },
    async logout(req: Request, res: Response) {
        await authService.logout(req.jti!, req.exp!);
        return res.json({
            success: true,
            message: "Logout success"
        });
    },
    async refreshToken(req: Request, res: Response) {
        const { refreshToken } = req.body;
        const data = await authService.refreshToken(refreshToken);
        return res.json({
            success: true,
            data,
            message: "Refresh token success"
        });
    }
}