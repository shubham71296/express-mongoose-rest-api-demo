const Product = require('../model/product');

module.exports.createproduct = (req,res)=>{
	const product = new Product({
	  name:req.body.name,
	  price:req.body.price
	});
	product
	.save()
	.then(data=>{
	  res.status(201).json({
		 message:"product data inserted",
		 createdproduct:data
	  })
	})
	.catch(err=>{
	   console.log(err);
	   res.status(500).json({
		 err:error
	   })
	})
}

module.exports.getallproduct = (req,res)=>{
  Product
  .find()
  .exec()
  .then(result=>{
  	res.status(200).json({
  	  message:"get all product",
  	  product:result
  	})
  })
  .catch(err=>{
  	console.log(err)
  	res.status(500).json({
      error:err
  	})
  })
}