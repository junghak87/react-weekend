import { forwardRef, useRef } from "react";

const ForwardRefEx = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>ForwardRefEx</h2>
      <Navigation fun={handleClick} />
      <MyInput ref={inputRef} />
    </div>
  );
};

const Navigation = ({ handleClick }) => {
  return (
    <nav>
      <button onClick={handleClick}>클릭</button>
    </nav>
  );
};

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="글자 입력" />;
});

export default ForwardRefEx;
