// class 형 component에서 2개 이상의 state 관리, 이벤트 처리

import { Component } from "react";

class MyEvent extends Component {
  state = {
    username: "",
    message: "",
  };

  handleSyncUserName = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  handleSyncMessage = (e) => {
    const message = e.target.value;
    this.setState({ message });
  };

  handleChange = (e) => {
    // const key = e.target.name;
    // const value = e.target.value;
    // this.setState({ key, value });

    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`${e.target.name} - ${e.target.value}`);
    }
  };

  handleClear = (e) => {
    this.setState({ username: "", message: "" });
  };

  render() {
    const { username, message } = this.state;

    return (
      <div>
        <h3>클래스 컴포넌트 이벤트 처리</h3>
        <div>
          {/* username에서 입력되는 값으로 자동 업데이트 처리 */}
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <input type="text" readOnly value={username} />
        </div>

        <div>
          {/* message에서 입력되는 값으로 자동 업데이트 처리 */}
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <input type="text" readOnly value={message} />
        </div>
        <div>
          <button onClick={this.handleClear}>clear</button>
        </div>
      </div>
    );
  }
}

export default MyEvent;
