const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/todosApp").then(()=>{
    console.log("db is ready to use");
    
}).catch((err)=>{
    console.log(err);
    
})