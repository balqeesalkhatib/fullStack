const mongoose = require("mongoose");

const usersSchema= new mongoose.Schema({
 email:{type:String, required:true},
 password:{type:String, required:true},
 role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"}

})

module.exports= mongoose.model("Users",usersSchema)