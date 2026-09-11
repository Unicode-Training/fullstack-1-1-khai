import { Queue } from 'bullmq';
import { queueConnection } from '../utils/queue.js';

export const emailRemindQueue = new Queue('EMAIL_REMIND', {
    connection: queueConnection,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true
    }
});