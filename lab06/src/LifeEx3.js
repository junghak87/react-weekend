import { useState, useEffect } from "react";

const LifeEx3 = () => {
  // useState hook
  const [now, setNow] = useState(new Date());

  // useEffect(effect, dependencies) hook
  // -effect : 콜백 함수
  // -dependencies : 의존성 배열
  // useEffect  함수를 호출하면 effect 콜백 함수가 1번 실행됨.
  // 의존성 배열의 원소 값이 변결될 때마다 콜백 함수가 실행됨.
  // LifeCycle componentDidMount , componentWillUnmount 의 함수 기능을 수행
  useEffect(() => {
    console.log("render");
    const id = setInterval(() => setNow(new Date()), 1000);

    //useEffect가 리턴하는 콜백은 Component가 unmount 될 때 호출 됨 componentWillUnmount)
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>함수 Component Hooks</h1>
      <h2>{now.toLocaleTimeString()}</h2>
      <h3>{now.toLocaleDateString()}</h3>
    </>
  );
};

export default LifeEx3;

// function funcName() {}
// export default funcName; == export default function funcName() {}
// arrow function 에서는 사용 불가
