const ProductController=require('../controllers/product.controller')

module.exports=(app)=>{
    app.get('/api/products',ProductController.allProducts);
    app.post('/api/product',ProductController.createProduct);
    app.get('/api/product/:id',ProductController.oneProduct);
    app.put('/api/product/:id',ProductController.updateProduct)
    app.delete('/api/product/:id',ProductController.deleteProduct)
}