import { Worker } from "bullmq";
import { workerConnection } from "../utils/queue.js";
import { demoService } from "../services/demo.service.js";
new Worker("FIBONACCI", async (job) => {
    if (job.name === "calc-fibonacci") {
        const n = +job.data;
        await demoService.getFinacciAndSaveDB(n);
        console.log('Đã thực thi xong');
        //Nguyên tắc:
        // - Nếu không có chuyện gì xảy ra -> tự đánh dấu job hoàn thành
        // - Nếu có lỗi văng ra -> Tự đánh dấu là job failed
    }

    if (job.name === "test-multi-worker") {
        console.log(`Thực thi job: ${job.data}`);
    }
}, {
    connection: workerConnection
});