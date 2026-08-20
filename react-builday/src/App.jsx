import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";


function App() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice JavaScript" },
    { id: 3, task: "Build Todo App" },
  ]

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm />
      
      <TodoList todos={todos} />
    </div>
  )
}

export default App
