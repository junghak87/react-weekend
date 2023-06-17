import { useRef, useState } from "react";

const RefDOM = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSendMessage = () => {
    // 기능 1. 메세지 전송시 기존 input의 값을 제거
    // 기능 2. 커서가 input으로 자동으로 이동 처리

    setText("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>ref로 DOM 조작하기</h2>
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleSendMessage}>메세지 전송</button>
    </div>
  );
};

export default RefDOM;
