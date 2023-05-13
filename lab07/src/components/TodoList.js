import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

// Todo 목록 관리
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        // todos 목록에서 todo 객체를 하나 꺼내서 item으로 전달
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
