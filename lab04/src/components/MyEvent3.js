import { useState } from "react";

const MyEvent3 = () => {
  const [obj, setState] = useState({
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...obj,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = (e) => {
    setState({});
  };

  return (
    <div>
      <h3>state 객체 초기값</h3>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input type="text" readOnly value={obj.username} />
      </div>

      <div>
        <input
          type="text"
          name="message"
          placeholder="message"
          onChange={handleChange}
        />
        <input type="text" readOnly value={obj.message} />
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default MyEvent3;
