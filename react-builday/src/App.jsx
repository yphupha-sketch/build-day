import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


export default function App() {
  const [todos, setTodos] = useState([
    
  ]);

  function handleAddTodo(task) {
    const newTodo = {
      id: Date.now(),
      task: task,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <h1>To Do List</h1>

      <TodoForm onAddTodo={handleAddTodo} />
      
      <TodoList todos={todos} />
    </div>
  )
}
