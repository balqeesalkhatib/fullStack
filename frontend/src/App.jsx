import { useEffect, useState } from "react";
import axios from "axios"
import Todos from "./components/Todos";
import CreateTodo from "./components/CreateTodo";
const App = () => {
  const [todos,setTodos]=useState([])
  const deleteTodo=(id)=>{
    axios.delete(`http://localhost:5000/todos/${id}`).then((result)=>{
      console.log(result);
       setTodos((preTodos) => {
          return preTodos.filter((elem, i) => {
            return elem._id !== id;
          });
        });

    }).catch((err)=>{
      console.log(err);
      
    })

  }
  useEffect(()=>{
    axios.get(" http://localhost:5000/todos/").then((result)=>{
      console.log(result.data.result);
      setTodos(result.data.result)
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
    <div>
      <h2>My Todos List</h2>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
      <CreateTodo setTodos={setTodos}/>
    </div>
  );
};

export default App;
