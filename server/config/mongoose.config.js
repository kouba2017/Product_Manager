const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/products_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log('connection established'))
    .catch(err=>console.log('error: ',err))