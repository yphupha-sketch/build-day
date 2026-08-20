import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>My To-Do List</h1>
      <TodoForm />
      <TodoItem />
      <TodoList />
    </div>
  )
}
