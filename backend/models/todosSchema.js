const mongoose = require("mongoose");

const todosSchema= new mongoose.Schema({
 task:{type:String, required:true},
completed:{type:Boolean, default:false},
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"Users"}

})

module.exports= mongoose.model("Todos",todosSchema)