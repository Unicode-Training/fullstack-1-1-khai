import { HttpException } from "../exceptions/http.exception.js";

// import fs from "fs";
export const userService = {
    findAll() {
        //Thao tác với model ở đây
        //Trả về (return)
        // fs.readFileSync('abc.txt'); //throw new Error("ABC")
        const a = -10;
        if (a < 0) {
            throw new Error("a phải là số dương")
        }
        return [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            },
            {
                id: 3,
                name: "User 3"
            }
        ]
    },
    find(id: number) {
        const users = [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            },
            {
                id: 3,
                name: "User 3"
            }
        ];
        const data = users.find(user => user.id === id);
        if (!data) {
            throw new HttpException("User not found", 404);
        }
        return data;
    }
}