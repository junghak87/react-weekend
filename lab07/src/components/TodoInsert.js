import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { useState, useCallback } from "react";

// insert new Todo List
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  // const onChange = useCallback((e) => {setValue(e.target.value)},[value],);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // form 의 기본 동작인 submit 실행을 막음 방지

      console.log("submit");
      console.log(e.target.value);
      console.log(value);

      onInsert(value);
      setValue("");
    },
    [value, onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일 입력"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
