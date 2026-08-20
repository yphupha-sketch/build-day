import TodoItem from './TodoItem';

export default function TodoList({ todos, onDeleteTodo }) {
    return ( 
        <div>
            {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          id={todo.id}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
        </div>
    );
}