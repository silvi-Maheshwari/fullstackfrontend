const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
name:{type:String,required:true},
description:{type:String},
quantity:{type:Number,default:0},
price:{type:Number}
})

const productModel=mongoose.model("products",productSchema)

module.exports=productModel