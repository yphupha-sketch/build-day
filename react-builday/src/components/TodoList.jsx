import TodoItem from './TodoItem';

export default function TodoList({todos}) {
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