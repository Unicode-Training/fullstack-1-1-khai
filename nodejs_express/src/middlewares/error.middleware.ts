/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../types/error.type.js";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        message: "Not found"
    })
}

//Error handling
export const errorMiddleware = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status || 500).json({
        message: err.message || "Server Error"
    });
}