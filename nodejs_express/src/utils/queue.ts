import { Redis } from "ioredis";
export const queueConnection = new Redis();
export const workerConnection = new Redis({
    maxRetriesPerRequest: null
})