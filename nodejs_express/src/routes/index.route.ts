import express from "express";
import { productController } from "../controllers/product.controller.js";
import { userController } from "../controllers/user.controller.js";
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


//PRODUCT
router.get('/products', productController.findAll);
router.get('/products/:id', productController.find);
router.post('/products', productController.create);
router.patch('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

export default router;