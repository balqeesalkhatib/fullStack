const userModel=require("../models/usersSchema")


const createUser=(req,res)=>{
const {email,password,role}=req.body
const newUser= new userModel({
    email,password,role
})
newUser.save().then((result)=>{
res.status(201).json({
    message:"user added successfully",
    result:newUser
})
}).catch((err)=>{
    res.json(err)
})
}

module.exports={
    createUser
}