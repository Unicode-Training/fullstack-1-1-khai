import { Request, Response } from "express";
import { postService } from "../services/post.service.js";
import { PostQuery } from "../types/post.type.js";

export const postController = {
    async index(req: Request, res: Response) {
        const data = await postService.findAll(req.query as PostQuery);
        return res.json({
            data,
            success: true,
            message: "Get post list success"
        })
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const data = await postService.find(+id!);
        return res.json({
            data,
            success: true,
            message: "Get post success"
        })
    },
    async create(req: Request, res: Response) {
        const data = await postService.create(req.body);
        return res.json({
            data,
            success: true,
            message: "Create post success"
        })
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const data = await postService.update(req.body, +id!);
        return res.json({
            data,
            success: true,
            message: "Update post success"
        })
    }
}