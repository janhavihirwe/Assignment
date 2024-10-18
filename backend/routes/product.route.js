const express=require("express")
const ProductModel=require("../model/product.model")
const route=express.Router()

route.get("/get-products",async(req,res)=>{
    try{
        const products=await ProductModel.find()
        return res.json({products})
    }
    catch(err){
        res.send(err)
    }
})

route.post("/add-products",async(req,res)=>{
    const {img,name,description,price}=req.body
    try{
        const exist=await ProductModel.findOne({name})
        if(exist){
            return res.json({message:"Product already added"})
        }
        const product=new ProductModel({
            img,
            name,
            description,
            price
        })
        await product.save()
        return res.json(product)
    }
    catch(err){
        res.json(err)
    }
})

module.exports=route