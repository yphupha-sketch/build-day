import { useState } from "react";

function TodoForm({onAddTodo}) {
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTodo(task)

    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="border-2 border-red-400 bg-red-200"
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button className="border-2 border-amber-400 bg-amber-200" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;