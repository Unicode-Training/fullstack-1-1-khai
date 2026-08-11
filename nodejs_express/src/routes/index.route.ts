import express from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
const router = express.Router();

//Register route
router.get('/users', userController.findAll);
// router.use(authMiddleware);
router.post('/users', authMiddleware, roleMiddleware, userController.create);
router.get('/users/:id', userController.find);
// router.get('/users/redirect', userController.demoRedirect);

export default router;