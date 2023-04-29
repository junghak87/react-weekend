import { useState } from "react";

const MyEvent2 = () => {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") setUserName(e.target.value);
    if (e.target.name === "message") setMessage(e.target.value);
  };

  const handleClear = (e) => {
    setMessage("");
    setUserName("");
  };

  return (
    <div>
      <h3>함수형 Component Event 처리</h3>

      {/* username에서 입력되는 값으로 자동 업데이트 처리 */}
      <div>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" readOnly value={username} />
      </div>

      {/* message에서 입력되는 값으로 자동 업데이트 처리 */}
      <input type="text" name="message" onChange={handleChange} />
      <input type="text" readOnly value={message} />

      <div>
        <button onClick={handleClear}>clear</button>
      </div>
    </div>
  );
};

export default MyEvent2;
