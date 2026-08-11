import express from "express";
import indexRouter from "./routes/index.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { demoMiddleware } from "./middlewares/demo.middleware.js";
import { errorMiddleware, notFoundMiddleware } from "./middlewares/error.middleware.js";
const PORT = 3000;
const app = express();

//Config middleware
app.use(express.json());

//Global middleware
app.use(loggerMiddleware);
app.use(demoMiddleware);

app.use(indexRouter);

//Route không khớp chạy tiếp xuống dưới

//Not Found Handling
app.use(notFoundMiddleware);

//Error Handling
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Đang chạy với PORT: ${PORT}`);
});

//Ví dụ:
//GET /api/users
//GET /api/users/:id
//POST /api/users
//PATCH /api/users/:id
//DELETE /api/users/:id