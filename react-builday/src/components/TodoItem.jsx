function TodoItem({ task }) {
  return (
    <div>
      <input type="checkbox" />

      <span>{task}</span>

      <button onClick={()=>onDeleteTodo(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;