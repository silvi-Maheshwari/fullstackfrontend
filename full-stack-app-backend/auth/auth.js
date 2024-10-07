const authmiddleware=(roles)=>(req,res,next)=>{
    var jwt = require('jsonwebtoken');
    // console.log("header",req.headers.authorization)
    let token=req.headers.authorization.split(" ")[1]
    console.log(token)
    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded)
    if(decoded){
        req.body.sellerid=decoded.userid
        req.body.role=decoded.role
        //  req.body.role=decoded.role
        if (!roles.includes(decoded.role)) {
            return res.status(404).json({ error: 'Access denied: Insufficient permissions' });
        }
           console.log(req.body)
        next()
    }
    else{
        console.log("please login again")
    }


}
module.exports=authmiddleware;