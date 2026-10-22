const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config();
const db= require("./models/db")
app.use(cors())
app.use(express.json())

const roleRouter=require("./routers/roleRouter")
const  userRouter=require("./routers/userRouter")
const todosRouter=require("./routers/todoRouter")
app.use("/roles",roleRouter)
app.use("/users",userRouter)
app.use("/todos",todosRouter)






app.listen(5000,()=>{
  console.log("Server running on port 5000")
})
