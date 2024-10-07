const express=require('express')
const productModel = require('../modules/productmodel')

const app=express()
const productRouter=express.Router()


productRouter.get('/',async(req,res)=>{
    try{
        let data=await productModel.find(req.body)
        res.json({msg:data})
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
})
productRouter.post('/',async(req,res)=>{
    try{
    let data=await productModel.insertMany(req.body)
    res.json({mag:data})
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})
productRouter.put('/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let data=await productModel.findByIdAndUpdate(id,req.body)
    res.json({mag:"data update successfull"})
    }
    catch(err){
        res.status(500).json({ error: err.message }); 
    }
})
productRouter.delete('/:id',async(req,res)=>{
    try{
        let id=req.params.id
        let data=await productModel.findByIdAndDelete(id)
        res.json({mag:"data deleted  successfull"})
        }
        catch(err){
            res.status(500).json({ error: err.message }); 
        }
})
module.exports=productRouter