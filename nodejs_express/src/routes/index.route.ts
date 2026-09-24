import express from "express";
import { productController } from "../controllers/product.controller.js";
import { userController } from "../controllers/user.controller.js";
import { courseController } from "../controllers/course.controller.js";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { demoController } from "../controllers/demo.controller.js";
import { postController } from "../controllers/post.controller.js";
const router = express.Router();

//Register route
// router.get('/users', userController.findAll);
// router.use(authMiddleware);
// router.post('/users', validate(createUserSchema), userController.create);
// router.get('/users/:id', userController.find);
// router.get('/users/redirect', userController.demoRedirect);

router.get('/users', userController.findAll);
router.post('/users', userController.create);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);
router.post('/users/:id/courses', userController.addCourse);
router.get('/users/:id/courses', userController.getCourses);
router.delete('/users/:id/courses', userController.deleteCourses);


//PRODUCT
router.get('/products', productController.findAll);
router.get('/products/:id', productController.find);
router.post('/products', productController.create);
router.patch('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

//Course
router.post('/courses', authMiddleware, courseController.create);

//Auth
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/profile', authMiddleware, authController.profile);
router.delete('/auth/logout', authMiddleware, authController.logout);
router.post('/auth/refresh-token', authController.refreshToken);
router.post('/auth/forgot-password', authController.forgotPassword);
router.put('/auth/reset-password', authController.resetPassword);

router.post('/fibnacci', demoController.calcFibonacci);

router.get('/posts', postController.index);
router.get('/posts/:id', postController.find);
router.post('/posts', postController.create);
router.put('/posts/:id', postController.update);

router.get('/posts/:postId/comments', postController.comments);
router.post('/posts/:postId/comments', postController.createComment);


export default router;