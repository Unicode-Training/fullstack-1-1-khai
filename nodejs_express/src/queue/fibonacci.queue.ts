import { Queue } from 'bullmq';
import { queueConnection } from '../utils/queue.js';

export const fibonacciQueue = new Queue('FIBONACCI', {
    connection: queueConnection,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true
    }
});