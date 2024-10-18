const express=require("express")
require("dotenv").config()
const cors=require("cors")
const connection=require("./config/db")
const route=require("./routes/product.route")
const app=express()
app.use(express.json())
app.use(cors({
    origin:"*"
})
)
app.use("/product",route)
app.get("/",(req,res)=>{
    res.send("Welcome to E-Commerce Application")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log(`Database is connected and listening on ${process.env.PORT}`)
    }
    catch(err){
        console.log(err)
    }
})