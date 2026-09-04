import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt.js";
import { HttpException } from "../exceptions/http.exception.js";
import { userService } from "../services/user.service.js";
import { JwtPayload } from "jsonwebtoken";
import { redis } from "../utils/ioredis.js";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    //Lấy token
    const token = req.headers.authorization?.split(' ').slice(-1).join();

    //Verify
    const decoded = verifyAccessToken(token as string) as JwtPayload & { id: number };
    if (!decoded) {
        throw new HttpException("Unauthorize", 401);
    }

    //Check blacklist
    const blacklist = await redis.get(`blacklist:${decoded.jti}`);
    if (blacklist) {
        throw new HttpException("Unauthorize", 401);
    }

    //Truy vấn tới bảng users
    const user = await userService.find(decoded.id);

    if (!user.status) {
        throw new HttpException("User block", 401);
    }

    req.user = user;
    req.jti = decoded.jti as string;
    req.exp = decoded.exp as number;

    next();
}

//Bearer token