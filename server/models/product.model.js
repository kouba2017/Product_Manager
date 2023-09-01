const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Product name is required']
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    description:{
        type:String,
        minlength:[2,'Minimum 2 characters']
    }
},{timestamps:true})
module.exports=mongoose.model('Product',ProductSchema)