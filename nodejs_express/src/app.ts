import express, { Request, Response } from "express";
const PORT = 3000;
const app = express();

//Config middleware
app.use(express.json());

//Routing
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Hello Express"
    })
});

app.get('/api/users', (req: Request, res: Response) => {
    // const { q, status } = req.query;
    // console.log(q);
    // console.log(status);
    // const apiKey = req.headers['x-api-key'];
    // const apiKey = req.get('x-api-key')
    // console.log(apiKey);

    res.json({
        message: "Get list users",

    })
});

app.get('/api/users/:id', (req: Request, res: Response) => {
    const id = req.params.id
    res.json({
        message: `Get user detail: ${id}`
    })
});

app.post('/api/users', (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        message: "Create user"
    })
});

app.listen(PORT, () => {
    console.log(`Đang chạy với PORT: ${PORT}`);
});

//Ví dụ:
//GET /api/users
//GET /api/users/:id
//POST /api/users
//PATCH /api/users/:id
//DELETE /api/users/:id