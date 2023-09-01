const ProductController=require('../controllers/product.controller')

module.exports=(app)=>{
    app.get('/api/products',ProductController.allProducts);
    app.post('/api/product',ProductController.createProduct)
}