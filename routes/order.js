const express = require('express');
const router = express.Router();
const order = require('../controller/ordercontroller');

router.post('/createorder',order.createorder);

router.get('/getallorder',order.getallorder);




module.exports = router;