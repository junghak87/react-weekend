// 함수형 Component 에서 상태 관리
// 1. useState(init value) 함수 호출
// 2. 원소가 2인 배열을 리턴 (첫번째 원소는 현재 상태값, 두번째 원소는 상태 변경함수)
//const [state, setState] = useState(initialState);

import { useState } from "react";

const MyState2 = () => {
  const [value, setValue] = useState(0);

  const minusCount = () => {
    //state 객체의 count 값을 감소
    //setValue(updater)
    setValue((prevValue) => prevValue - 1);
  };

  const plusCount = () => {
    //state 객체의 count 값을 증가
    //setValue(nextValue)
    setValue(value + 1);
  };

  return (
    <div>
      <h3>함수형 State</h3>
      <div>Count : {value}</div>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
    </div>
  );
};

export default MyState2;
