import { NextFunction, Request, Response } from "express";

//Cấu tạo middleware là 1 hàm có 3 tham số
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('loggerMiddleware');
    next(); //Cho phép request đi tiếp
}