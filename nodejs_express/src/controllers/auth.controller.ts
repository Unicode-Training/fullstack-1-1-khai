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
        const userId = req.user?.id;
        await authService.logout(req.jti!, req.exp!, userId!);
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
    },
    async forgotPassword(req: Request, res: Response) {
        const data = await authService.forgotPassword(req.body.email);
        return res.json({
            data,
            success: true,
            message: "Send OTP Success"
        })
    },

    async resetPassword(req: Request, res: Response) {
        const data = await authService.resetPassword(req.body.otp, req.body.password);
        return res.json({
            data,
            success: true,
            message: "Reset password success"
        })
    }
}

//Luồng chức năng quên mật khẩu
// - POST /forgot-password (Kèm body {email: email-nguoi-dung})
// - Backend check email có tồn tại hay không?
// - Nếu tồn tại -> Tạo mã OTP 6 số, thời hạn là 1 phút -> Gửi email cho người dùng

// - PUT /reset-password
// - Body: 
/*
{
    otp: "lay-o-buoc-tren",
    password: "mat-khau-moi"
}
*/