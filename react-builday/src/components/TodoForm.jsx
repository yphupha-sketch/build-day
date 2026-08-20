import { useState } from "react";

function TodoForm() {
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(task);

    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;