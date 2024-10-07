const mongoose=require('mongoose')
const express=require('express')
var bcrypt = require('bcryptjs');

const userRouter=express.Router()
var jwt = require('jsonwebtoken');
const usermodel = require('../modules/user');

var salt = bcrypt.genSaltSync(10);
userRouter.post('/register',async(req,res)=>{
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password=hash
    console.log(req.body)
 let user= await usermodel.insertMany(req.body)
 console.log(user)
 res.json({msg:user})
})

userRouter.post('/login',async(req,res)=>{
    const userdata=await usermodel.findOne({email:req.body.email})
    console.log(userdata)
   const ans= bcrypt.compareSync(req.body.password, userdata.password);
   console.log(ans)
 
   if(ans==true){
    var token = jwt.sign({ userid: userdata._id}, 'shhhhh');
    console.log("token suceesfull received",token)

    res.json({msg:"user login successfull",token})
   }
   else{
    res.json({msg:"wrong password"})
   }

})



module.exports=userRouter