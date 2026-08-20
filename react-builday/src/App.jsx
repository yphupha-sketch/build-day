import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";


function App() {

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm />
      
      <TodoList />
    </div>
  )
}

export default App
