import { prisma } from "../lib/prisma.js"
import { PostQuery } from "../types/post.type.js";
import { cache } from "../utils/cache.js";

export const postService = {
    async findAll({ q = "" }: PostQuery) {
        const version = await cache.getKeyVersion('posts:version');
        const cacheKey = `posts:v${version}${q ? ':' + q : ""}`;
        const ttl = 3600;
        return cache.remember(cacheKey, () => prisma.post.findMany({
            where: {
                title: {
                    contains: q
                }
            },
            omit: {
                content: true
            }
        }), ttl);
    },

    async find(id: number) {
        const cacheKey = `posts:detail:${id}`;
        const ttl = 3600;
        return cache.remember(cacheKey, () => prisma.post.findUnique({
            where: { id }
        }), ttl);
    },

    async create(postData: { title: string; content: string }) {
        const post = await prisma.post.create({
            data: postData
        });
        //clear cache
        // await redis.incr(`cache:posts-version`); //Tự động tăng lên 1 đơn vị
        await cache.incrementKeyVersion('posts:version');

        return post;
    },

    async update(postData: { title: string; content: string }, id: number) {
        const cacheKey = `posts:detail:${id}`;
        const post = await prisma.post.update({
            where: { id },
            data: postData
        });
        await cache.delete(cacheKey);
        await cache.incrementKeyVersion('posts:version');
        return post;
    }
}

//quy tắc cache: dựa theo key
//Kỹ thuật versioning: 
// - Áp dụng với các endpoint có quá nhiều params (search params)
// - Cách triển khai: Trong cacheKey đặt version (version phải lưu trên redis, vĩnh viễn)
// - Khi thay đổi dữ liệu -> Tăng version trên redis
// Các cache key theo version sẽ tự động xóa khi hết hạn