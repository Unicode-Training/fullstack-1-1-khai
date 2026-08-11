import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    console.log("authMiddleware");
    const token = req.headers['x-token'];
    if (token === 'unicode') {
        next();
    } else {
        return res.status(401).json({
            message: "Token không hợp lệ"
        })
    }
}