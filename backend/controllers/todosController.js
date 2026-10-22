const todoModel = require("../models/todosSchema");

const createTodo = (req, res) => {
  const { task, completed, createdBy } = req.body;

  const newTodo = new todoModel({
    task,
    completed,
    createdBy,
  });
  newTodo
    .save()
    .then((result) => {
      res.json(newTodo);
    })
    .catch((err) => {
      res.json(err);
    });
};
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({}).populate("createdBy");
    res.status(200).json({
      success: true,
      message: "all todos",
      result: todos,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  console.log(id);
  todoModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
      res.json({
        success: true,
        message: "deleted Todo",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  createTodo,
  getAllTodos,
  deleteTodo,
};
