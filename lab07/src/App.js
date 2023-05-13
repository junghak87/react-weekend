import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { useState, useRef, useCallback } from "react";

function App() {
  // App 에서 state로 관리하는 변수 - 할 일 목록
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo app 만들기", checked: true },
    { id: 2, text: "스타일 적용하기", checked: true },
    { id: 3, text: "기능 완성하기", checked: false },
  ]);

  // useRef 의 객체는 current라는 속성을 가지고 있는다.
  // to-do item 의 Id 값으로 사용하려는 변수
  const nextId = useRef(4);

  // todos 배열에 새로운 객체를 추가하는 함수를 callback으로 생성
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1; // 다음 생성할 id 값으로 미리 변경
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo },
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* state로 관리하는 할 일  배열 목록을 props 로 Todo List 컴포넌트로 전달*/}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
