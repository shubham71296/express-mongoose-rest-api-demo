const express = require('express');
const app     = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const URL="mongodb://localhost:27017/userMernDb";
mongoose.connect(URL);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
     extended:true
}));

const product = require('./routes/product');
const order = require('./routes/order');

app.use('/product',product);
app.use('/order',order);


app.listen(3000,()=>{
	console.log('server running on port 3000...');
})  