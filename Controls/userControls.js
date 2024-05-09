const users = require("../Modal/userModal")
const jwt=require('jsonwebtoken')

//user register
exports.register=async(req,res)=>{
    const{userName,email,password}=req.body
    try{
const existingUser= await users.findOne({email})
if (existingUser){
    res.status(400).json("You are registered already ")
}else{

const newUser= new users({
    userName,email,password
})
await newUser.save()
res.status(200).json(`${userName} is registered successfully`)
}
    }catch(err){
res.status(401).json("Api not working")
    }
    
}
//user login
exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{

    const currentUser= await users.findOne({email,password}) 
    if(currentUser) {
    //token
        const token=jwt.sign({_id:currentUser._id},"superkey123")
        //passing token to FE
        res.status(200).json({user:currentUser,token})
        
    }  
else{
    res.status(404).json("Incorrect Email or Password")
}
    }catch(err){
        res.status(401).json("Api not working")
    }

}