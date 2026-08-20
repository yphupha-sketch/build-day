function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" />

      <span>{props.text}</span>

      <button>Delete</button>
    </div>
  );
}

export default TodoItem;