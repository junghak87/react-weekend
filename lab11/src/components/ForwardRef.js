import { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>다른 Component DOM 참조</h2>
      <nav>
        <button onClick={handleClick}>클릭</button>
      </nav>
      {/* ref 라는 명칭은 고유한 속성값이라 props 명칭으로 사용 불가능 */}
      {/* <MyInput myref={inputRef} /> */}

      <MyInput ref={inputRef} />
    </div>
  );
};

// 사용은 가능하나 비권장
// const MyInput = ({ myref }) => {
//   return <input placeholder="메세지 입력" ref={myref} />;
// };

// 공식 문서에서는 forwardRef 기능을 권장
const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <input placeholder="메세지 입력" ref={ref} />
    </div>
  );
});

export default ForwardRef;
