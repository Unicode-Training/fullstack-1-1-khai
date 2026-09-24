import { CACHE_KEYS, CACHE_TTL } from "../constants/cache.constant.js";
import { prisma } from "../lib/prisma.js"
import { PostQuery } from "../types/post.type.js";
import { cache } from "../utils/cache.js";

export const postService = {
    async findAll(query: PostQuery) {
        const { q } = query;
        const version = await cache.getKeyVersion(CACHE_KEYS.POSTS.VERSION_KEY);
        const cacheKey = CACHE_KEYS.POSTS.LIST(version, query);
        const ttl = CACHE_TTL.POSTS.LIST;
        return cache.remember(cacheKey, () => prisma.post.findMany({
            where: {
                title: {
                    contains: q
                }
            },

        }), ttl);
    },

    async find(id: number) {
        const cacheKey = CACHE_KEYS.POSTS.DETAIL(id);
        const ttl = CACHE_TTL.POSTS.DETAIL;
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
        await cache.incrementKeyVersion(CACHE_KEYS.POSTS.VERSION_KEY);

        return post;
    },

    async update(postData: { title: string; content: string }, id: number) {
        const cacheKey = CACHE_KEYS.POSTS.DETAIL(id);
        const post = await prisma.post.update({
            where: { id },
            data: postData
        });
        await cache.delete(cacheKey);
        await cache.incrementKeyVersion(CACHE_KEYS.POSTS.VERSION_KEY);
        return post;
    },

    async getComments(postId: number) {
        return prisma.comment.findMany({
            where: {
                postId
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    },

    async createComment(body: { name: string, email: string, message: string, postId: number }) {
        return prisma.comment.create({
            data: body
        })
    }
}

//quy tắc cache: dựa theo key
//Kỹ thuật versioning: 
// - Áp dụng với các endpoint có quá nhiều params (search params)
// - Cách triển khai: Trong cacheKey đặt version (version phải lưu trên redis, vĩnh viễn)
// - Khi thay đổi dữ liệu -> Tăng version trên redis
// Các cache key theo version sẽ tự động xóa khi hết hạn