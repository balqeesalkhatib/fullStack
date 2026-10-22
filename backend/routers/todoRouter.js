const express = require("express");
const todosRouter= express.Router()

const {
    createTodo,getAllTodos,deleteTodo
}= require("../controllers/todosController")

todosRouter.post("/",createTodo)
todosRouter.get("/",getAllTodos)
todosRouter.delete("/:id",deleteTodo)
module.exports=todosRouter