import { redis } from "./ioredis.js";

export const cache = {
    async remember<T>(key: string, callback: () => Promise<T>, ttl: number = 3600) {
        const cacheKey = `cache:${key}`;
        const dataFromCache = await redis.get(cacheKey);
        if (dataFromCache) {
            return JSON.parse(dataFromCache);
        }
        const dataOnDb = await callback();
        redis.setex(cacheKey, ttl, JSON.stringify(dataOnDb))
        return dataOnDb;
    },
    async forever<T>(key: string, callback: () => Promise<T>) {
        const cacheKey = `cache:${key}`;
        const dataFromCache = await redis.get(cacheKey);
        if (dataFromCache) {
            return JSON.parse(dataFromCache);
        }
        const dataOnDb = await callback();
        redis.set(cacheKey, JSON.stringify(dataOnDb))
        return dataOnDb;
    },
    async delete(key: string) {
        const cacheKey = `cache:${key}`;
        await redis.del(cacheKey);
        return true;
    },
    async getKeyVersion(key: string) {
        const cacheKey = `cache:${key}`;
        let version = await redis.get(cacheKey);
        if (!version) {
            await redis.set(cacheKey, 1);
            version = '1';
        }
        return version;
    },
    async incrementKeyVersion(key: string) {
        const cacheKey = `cache:${key}`;
        return await redis.incr(cacheKey);
    }
}