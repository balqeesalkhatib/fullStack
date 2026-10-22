const express = require("express");
const roleRouter= express.Router()
const {
    createRole
}=require("../controllers/roleController")



roleRouter.post("/",createRole)




module.exports=roleRouter