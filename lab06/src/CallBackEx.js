import { useState, useCallback } from "react";

const CallBackEx = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  //   event listener 같은 함수들을 선언하는 경우에는
  //   컴포넌트가 다시 렌더링 될때마다 새로운 만들어지는 함수를 사용하게 됨

  //   컴포넌트의 렌더링이 자주 발생하거나 렌더링을 해야 할 컴포넌트가 많으면 성능 저하를 일으킴

  //   렌더링 성능을 최적화 하기 위해서 컴포넌트가 처음 렌더링시 만든 함수를 재활용하는 방법을 사용 -> useCallBack

  //   이때 의존성 목록이 null 일 경우 componet가 처음 렌더링 될때에만 함수가 생성된다.

  const onChange = useCallback((e) => {
    setNumber(Number(e.target.value));
  }, []);

  const onInsert = useCallback(
    (e) => {
      //todo
      console.log(number);
      const nextList = list.concat(Number(number));
      setList(nextList);
      setNumber("");
    },
    [number, list],
  ); // onInsert는 number 상태와 list 상태가 변경 될때만 함수를 생성

  return (
    <div>
      <h1>useCallBack 예제</h1>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallBackEx;
