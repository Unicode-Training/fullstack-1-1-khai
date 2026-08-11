import { Request, Response } from "express";
import { userService } from "../services/user.service.js";
// import stringify from "safe-stable-stringify";
export const userController = {
    findAll(req: Request, res: Response) {
        //Service
        const data = userService.findAll();
        return res.json({
            data
        })
        // res.header('x-api-key', '123');
        // res.set('x-abc', "ahihi");
        // const user = {
        //     id: 12n, //BigInt
        //     name: "An"
        // }
        // return res.header("Content-Type", "application/json").send(stringify(user));
    },

    find(req: Request, res: Response) {
        const { id } = req.params;
        const data = userService.find(+id!);
        return res.json({
            message: "Get user detail success",
            data,
        })
    },

    create(req: Request, res: Response) {

        res.json({
            success: true,
            message: "Create user success"
        });
    },
    demoRedirect(req: Request, res: Response) {
        return res.redirect('https://google.com');
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