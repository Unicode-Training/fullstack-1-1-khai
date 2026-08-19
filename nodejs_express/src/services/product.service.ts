import { prisma } from "../lib/prisma.js"
import { ProductWhereInput } from "../prisma/generated/prisma/models.js";
import { ProductFilter } from "../types/product.type.js";

export const productService = {
    async findAll({ q = "" }: ProductFilter) {
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
        return prisma.product.findMany({
            where: filter
        });
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