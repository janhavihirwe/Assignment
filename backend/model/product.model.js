const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    img:String,
    name:String,
    description:String,
    price:Number
})

const ProductModel=mongoose.model("product",productSchema)
module.exports=ProductModel