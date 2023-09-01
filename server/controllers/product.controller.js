const Product=require('../models/product.model')

module.exports.allProducts=(req,res)=>{
    Product.find({})
        .then(products=>{
            console.log(products);
            res.json(products)})
        .catch(err=>res.json(err))
}
module.exports.createProduct=(req,res)=>{
    Product.create(req.body)
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}