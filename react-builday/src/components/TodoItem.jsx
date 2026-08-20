function TodoItem({ task }) {
  return (
    <div>
      <input type="checkbox" />

      <span>{task}</span>

      <button onClick={()=>onDeletetodo(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;