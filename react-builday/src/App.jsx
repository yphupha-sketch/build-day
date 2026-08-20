import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";


function App() {

  return (
    <>
    <h1>to do list</h1>
    <TodoForm/>
     
    </>
  )
}

export default App
