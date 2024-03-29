const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.userView);
router.get('/about', usersController.aboutView);
router.get('/pricing', usersController.pricingView);
router.get('/services', usersController.servicesView);
router.get('/products', usersController.productsView);

module.exports = router;

