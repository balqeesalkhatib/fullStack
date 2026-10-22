import axios from "axios";
import React, { useState } from "react";

const CreateTodo = ({setTodos}) => {
  const [task, setTask] = useState("");
  const addTodo = () => {
    axios
      .post("http://localhost:5000/todos/", { task: task })
      .then((result) => {
         console.log(result.data);
        setTodos((prevTodos)=>{
            return [...prevTodos,result.data]
        })
       
        setTask("")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
      value={task}
        type="text"
        placeholder="CreateTodo"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>add todo</button>
    </div>
  );
};

export default CreateTodo;
