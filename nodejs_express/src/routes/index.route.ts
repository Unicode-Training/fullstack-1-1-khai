import express from "express";
import { userController } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createUserSchema } from "../validators/user.validator.js";
const router = express.Router();

//Register route
router.get('/users', userController.findAll);
// router.use(authMiddleware);
router.post('/users', validate(createUserSchema), userController.create);
router.get('/users/:id', userController.find);
// router.get('/users/redirect', userController.demoRedirect);

export default router;