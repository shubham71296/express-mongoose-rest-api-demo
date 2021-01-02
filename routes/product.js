const express = require('express');
const router = express.Router();
const product = require('../controller/productcontroller');

router.post('/createproduct',product.createproduct);

router.get('/getallproduct',product.getallproduct);




module.exports = router;