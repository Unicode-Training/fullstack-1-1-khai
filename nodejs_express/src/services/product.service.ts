import { HttpException } from "../exceptions/http.exception.js";
import { prisma } from "../lib/prisma.js"
import { Prisma } from "../prisma/generated/prisma/client.js";
import { ProductWhereInput } from "../prisma/generated/prisma/models.js";
import { ProductFilter, ProductSelect } from "../types/product.type.js";

export const productService = {
    async findAll({ q = "", fields = "", minPrice, maxPrice, page = 1, limit = 3, sort = "id", order = "asc" }: ProductFilter) {
        const array = fields.split(',').filter(val => val);
        const select = array.reduce((acc, cur) => {
            acc[cur.trim()] = true;
            return acc;
        }, {} as ProductSelect);

        const filter = {} as ProductWhereInput
        if (q) {
            filter.OR = [
                {
                    name: {
                        contains: q
                    }
                },
                {
                    description: {
                        contains: q
                    }
                }
            ]
        }

        if (minPrice || maxPrice) {
            filter.AND = [];
            if (minPrice) {
                filter.AND.push({
                    price: {
                        gte: +minPrice
                    }
                })
            }

            if (maxPrice) {
                filter.AND.push({
                    price: {
                        lte: +maxPrice
                    }
                })
            }
        }
        const skip = (page - 1) * limit;
        try {
            const [products, count] = await Promise.all([
                prisma.product.findMany({
                    where: filter,
                    ...(Object.keys(select).length ? { select: select } : {}),
                    take: +limit,
                    skip,
                    orderBy: {
                        [sort]: order
                    }
                }),
                prisma.product.count({
                    where: filter
                })
            ])
            return {
                products, count
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                const pattern = /(Unknown argument `.+`)|(Unknown field `.+?`)/;
                const result = error.message.match(pattern);
                throw new HttpException(result?.[0] as unknown as string, 500);
            }
            if (error instanceof Error) {
                throw new HttpException("Server Error", 500);
            }

        }
    }
}

/*
// const q = "điện"
        const products = await prisma.product.findMany({
            where: {
                //tên trường: { toán tử: giá trị }
                // id: {
                //     gte: 5,
                //     lte: 7
                // }
                // OR: [
                //     {
                //         name: {
                //             contains: q
                //         }
                //     },
                //     {
                //         description: {
                //             contains: q
                //         }
                //     }
                // ],
                // status: true
            },
            // orderBy: [
            //     {
            //         name: "desc" //asc: tăng dần, desc: giảm dần
            //     },
            //     {
            //         id: "asc"
            //     }
            // ]
            orderBy: {

            }
            // select: {
            //     id: true,
            //     name: true,
            //     price: true
            // }
            // omit: {
            //     description: true
            // }
            take: 3, //limit trong sql
            skip: 1 //offset trong sql
        });
*/