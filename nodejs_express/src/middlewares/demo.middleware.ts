import { NextFunction, Request, Response } from "express";

export const demoMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('demoMiddleware');
    next();
}