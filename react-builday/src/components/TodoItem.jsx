function TodoItem({ task,id,onDeleteTodo }) {
  return (
    <div>
      <input type="checkbox" />

      <span>{task}</span>

      <button className="border-2 border-amber-400 bg-amber-200 " onClick={()=>onDeleteTodo(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;