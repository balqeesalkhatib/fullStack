import React from 'react'

const Todos = ({todos,deleteTodo}) => {
    console.log(todos);
    
  return (
    <div>
        <ul>
            {todos&& todos.map((elem,i)=>{
                console.log(elem);
                
                return <div>
                    <li key={i}>{elem.task}
                <input type='checkbox' checked={elem.completed?true:false} readOnly/>
                </li>
                <button onClick={()=>{
                    deleteTodo(elem._id)
                }}>x</button>
                </div>
            })}
        </ul>
    </div>
  )
}

export default Todos