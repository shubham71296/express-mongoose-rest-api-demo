const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	product:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'product',
		require:true
	},
	quantity:{
		type:Number,
		default:1,
	}
});

module.exports = mongoose.model('order',orderSchema);