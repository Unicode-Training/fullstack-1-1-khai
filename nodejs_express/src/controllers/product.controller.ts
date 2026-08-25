import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { HttpException } from "../exceptions/http.exception.js";
import { productService } from "../services/product.service.js";
import { ProductFilter } from "../types/product.type.js";

export const productController = {
    async findAll(req: Request, res: Response) {
        const data = await productService.findAll(req.query as unknown as ProductFilter);
        if (!data) {
            return;
        }
        const { products, count } = data;
        return res.json({
            data: products,
            meta: {
                total: count
            }
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
        const { images, ...productData } = req.body;
        //['anh1.jpg', 'anh2.jpg']
        const product = await prisma.product.create({
            data: {
                ...productData,
                images: {
                    createMany: {
                        data: images.map((image: string) => ({
                            imageUrl: image
                        }))
                    }
                }
            }
        })
        return res.json({
            data: product
        })
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { images, ...productData } = req.body;

        //Cần phải xử lý
        //1. Tìm ảnh cần thêm vào bảng product_images -> So sánh giữa body với data product_images
        const productImageFromDb = await prisma.productImage.findMany({
            where: {
                productId: +id!
            }
        });
        const productImageDbMap = productImageFromDb.map((item) => item.imageUrl);

        const imageCreate = images.filter((image: string) => !productImageDbMap.includes(image));


        //2. Tìm ảnh cần xóa trên bảng product_images -> So sánh giữa data product_images với body

        const idImageDelete = productImageFromDb.filter((item) => {
            return !images.includes(item.imageUrl);
        }).map(item => item.id);

        //Xóa ảnh thừa trên DB
        await prisma.productImage.deleteMany({
            where: {
                id: {
                    in: idImageDelete
                }
            }
        });

        //Thêm ảnh mới
        await prisma.productImage.createMany({
            data: imageCreate.map((item: string) => ({ imageUrl: item, productId: +id! }))
        });

        const product = await prisma.product.update({
            where: {
                id: +id!
            },
            data: productData
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