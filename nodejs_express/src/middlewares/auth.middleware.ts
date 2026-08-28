import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt.js";
import { HttpException } from "../exceptions/http.exception.js";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Lấy token
    const token = req.headers.authorization?.split(' ').slice(-1).join();

    //Verify
    const decoded = verifyAccessToken(token as string);
    if (!decoded) {
        throw new HttpException("Unauthorize", 401);
    }
    next();
}

//Bearer token