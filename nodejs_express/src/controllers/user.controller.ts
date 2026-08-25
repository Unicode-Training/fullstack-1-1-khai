import { Request, Response } from "express";
import { userService } from "../services/user.service.js";

export const userController = {
    async findAll(req: Request, res: Response) {
        const users = await userService.findAll(req.query as { phone: string });
        return res.json({
            data: users
        });
    },
    async create(req: Request, res: Response) {
        const user = await userService.create(req.body);
        return res.json({
            data: user
        });
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const user = await userService.update(req.body, +id!);
        return res.json({
            data: user
        });
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const user = await userService.delete(+id!);
        return res.json({
            data: user
        });
    }
}

//Cấu tạo controller
// Object hoặc class
// Method (Action)

//Lưu ý về Service
// - Controller có thể gọi nhiều Service
// - Service này có thể gọi service khác
// - Service chỉ được trả về dữ liệu, không được trả về Response cho client
// - Không phải Service nào cũng sẽ thao tác với Database

//Response
// - send("Nội dung"): Gửi bất kỳ nội dung gì về Client
// - json(): Chuyển dữ liệu cần gửi về json sau đó trả về client
// - status(): Setup http response code
// - header(key, value)
// - redirect(url)