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

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>To Do List</h1>

      <TodoForm onAddTodo={handleAddTodo} />
      
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  )
}
