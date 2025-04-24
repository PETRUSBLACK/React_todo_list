import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){

  const [todos, setTodos] = useState([])


  
  function toggleTodo( id, completed){

    setTodos( currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return { ...todo, completed}
        }

        return todo 
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>


      <h1 className="header">Todo List</h1>
      <NewTodoForm />

      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map( todo => {setTodos
          return <li key={todo.id}>
                    <label>
                      <input type="checkbox" 
                      checked={todo.completed}
                      onChange={ e => toggleTodo(todo.id, e.target.checked)}
                    />
                      {todo.title}
                    </label>
                    <button  onClick={ () => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                  </li>
        })}
      </ul>
    </>
  )
}

