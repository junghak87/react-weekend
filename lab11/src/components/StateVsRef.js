import { useRef, useState } from "react";

const RefVsState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // state 변경이 일어나면서 자동으로 re-render 처리
  const handleStateClick = () => {
    // setCount(count + 1);

    //call back 방식 (비동기 적 방식에서 좀더 안정적)
    setCount((prev) => prev + 1);

    //state 가 함수를 저장하고 있고, 함수를 변경하고 싶다면
    //아래 코드 방식으로 함수 값을 변경 가능
    // setCount((prev) => (변경할 함수)  => {});
  };

  // 값이 변경 되어도 re-render 처리 되지 않음
  const handelRefClick = () => {
    countRef.current++;
  };

  return (
    <div>
      <h2>State VS Ref</h2>
      <h3>State</h3>
      <button onClick={handleStateClick}> {count} 번 클릭됨</button>

      <h3>Ref</h3>
      <button onClick={handelRefClick}> {countRef.current} 번 클릭됨</button>
    </div>
  );
};

export default RefVsState;
