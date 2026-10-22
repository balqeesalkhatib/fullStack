const mongoose = require("mongoose");
const roleModel=require("../models/roleSchema")
const createRole=async(req,res)=>{
const {role,permissions}=req.body
try{
const newRole= new roleModel({
    role,permissions
})
await newRole.save()
res.status(201).json(newRole)
}catch(err){
    res.status(500).json({message:err.message})
}
}

module.exports={
    createRole
}