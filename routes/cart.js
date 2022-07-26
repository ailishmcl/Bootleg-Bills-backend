const express = require('express');

const router = express.Router();

router.use(express.json());

const cartCtrl = require('../controllers/cart');

// router.get('/cart', cartCtrl.cart_create_get)
router.post('/cart', cartCtrl.cart_create_post)


module.exports = router;