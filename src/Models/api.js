const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');
const customerController = require('../Controllers/customerController');
const categoryController = require('../Controllers/categoryController');
const orderController = require('../Controllers/orderController');
const productController = require('../Controllers/productController');
const order_itemController = require('../Controllers/order_itemController');
const paymentController = require('../Controllers/paymentController');
const shipmentController = require('../Controllers/shipmentController');
const cartController = require('../Controllers/cartController');
const wishlistController = require('../Controllers/wishlistController');


router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/create', userController.createUser);
router.get('/users/:id/update', userController.updateUser);


router.get('/admins', adminController.getAllAdmins);
router.get('/admins/:id', adminController.getAdminById);
router.get('/admins/create', adminController.createAdmin);
router.get('/admins/:id/update', adminController.updateAdmin);

router.get('/carts/create', cartController.create);
router.get('/carts/:id', cartController.read);
router.get('/carts/:id/delete', cartController.delete);
router.get('/carts/:id/update', cartController.update);

router.get('/wishlists/create', wishlistController.create);
router.get('/wishlists/:id', wishlistController.read);
router.get('/wishlists/:id/delete', wishlistController.delete);
router.get('/wishlists/:id/update', wishlistController.update);

router.get('/shipments/create', shipmentController.create);
router.get('/shipments/:id', shipmentController.read);
router.get('/shipments/:id/delete', shipmentController.delete);
router.get('/shipments/:id/update', shipmentController.update);

router.get('/payments/create', paymentController.create);
router.get('/payments/:id', paymentController.read);
router.get('/payments/:id/delete', paymentController.delete);
router.get('/payments/:id/update', paymentController.update);

router.get('/order_items/create', order_itemController.create);
router.get('/order_items/:id', order_itemController.read);
router.get('/order_items/:id/delete', order_itemController.delete);
router.get('/order_items/:id/update', order_itemController.update);

router.get('/products/create', productController.create);
router.get('/products/:id', productController.read);
router.get('/products/:id/delete', productController.delete);
router.get('/products/:id/update', productController.update);

router.get('/orders/create', orderController.create);
router.get('/orders/:id', orderController.read);
router.get('/orders/:id/delete', orderController.delete);
router.get('/orders/:id/update', orderController.update);

router.get('/categories/create', categoryController.create);
router.get('/categories/:id', categoryController.read);
router.get('/categories/:id/delete', categoryController.delete);
router.get('/categories/:id/update', categoryController.update);

router.get('/customers/create', customerController.create);
router.get('/customers/:id', customerController.read);
router.get('/customers/:id/delete', customerController.delete);
router.get('/customers/:id/update', customerController.update);

router.get('/posts/create', postController.create);
router.get('/posts/:id', postController.read);
router.get('/posts/:id/delete', postController.delete);
router.get('/posts/:id/update', postController.update);

router.get('/subadmins/create', subAdminController.create);
router.get('/subadmins/:id', subAdminController.read);
router.get('/subadmins/:id/delete', subAdminController.delete);
router.get('/subadmins/:id/update', subAdminController.update);


module.exports = router;
