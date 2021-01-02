const Order = require('../model/order');

module.exports.createorder = (req,res)=>{
	const order = new Order({
	  product:req.body.product,
	  quantity:req.body.quantity
	});
	order
	.save()
	.then(data=>{
	  res.status(201).json({
		 message:"order data inserted",
		 createdorder:data
	  })
	})
	.catch(err=>{
	   console.log(err);
	   res.status(500).json({
		 err:error
	   })
	})
}

module.exports.getallorder = (req,res)=>{
  Order
  .find()
  .populate('product')
  .exec()
  .then(result=>{
  	res.status(200).json({
  	  message:"get all order",
  	  order:result
  	})
  })
  .catch(err=>{
  	console.log(err)
  	res.status(500).json({
      error:err
  	})
  })
}