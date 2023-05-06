import { useState } from "react";

const IterationExample2 = ({ items }) => {
  // console.log(items);

  const [list, setList] = useState(items);
  const [nextId, setNextId] = useState(5);
  const [inputText, setInputText] = useState("");
  const itemList = list.map(({ id, name }) => (
    <li key={id}>
      {name} <button onClick={() => deleteItem(id)}>삭제</button>
    </li>
  ));

  const deleteItem = (id) => {
    // object Filter 처리
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const addItem = (e) => {
    const item = {
      id: nextId,
      name: inputText,
    };

    // object 추가
    setList(list.concat(item));

    //next id값 증가
    setNextId(nextId + 1);

    //input 값 초기화
    setInputText("");
  };

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h3>Iteration 예제2 </h3>
      <input
        id="inputValue"
        type="text"
        placeholder="아이템 입력"
        value={inputText}
        onChange={onChangeInput}
      />
      <button onClick={addItem}>입력</button>
      <ul>{itemList}</ul>
    </div>
  );
};

export default IterationExample2;
