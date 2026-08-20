import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice JavaScript" },
    { id: 3, task: "Build Todo App" },
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
