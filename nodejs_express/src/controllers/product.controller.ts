import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { HttpException } from "../exceptions/http.exception.js";
import { productService } from "../services/product.service.js";
import { ProductFilter } from "../types/product.type.js";

export const productController = {
    async findAll(req: Request, res: Response) {
        const products = await productService.findAll(req.query as ProductFilter);
        return res.json({
            data: products
        })
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: {
                id: +id!
            }
        })
        if (!product) {
            throw new HttpException("Product not foud", 404);
        }
        return res.json({
            data: product
        })
    },
    async create(req: Request, res: Response) {
        const product = await prisma.product.create({
            data: req.body
        })
        return res.json({
            data: product
        })
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        const product = await prisma.product.update({
            where: {
                id: +id!
            },
            data: body
        });
        return res.json({
            data: product
        })
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const product = await prisma.product.delete({
            where: {
                id: +id!
            }
        })
        return res.json({
            data: product
        })
    }
}