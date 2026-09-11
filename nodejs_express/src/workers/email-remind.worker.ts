import { Worker } from "bullmq";
import { workerConnection } from "../utils/queue.js";
new Worker("EMAIL_REMIND", async (job) => {
    console.log(job.name + 'đã xử lý');
}, {
    connection: workerConnection
});