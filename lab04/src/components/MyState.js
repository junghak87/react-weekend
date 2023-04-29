// class 형 component에서 상태 관리

import { Component } from "react";

class MyState extends Component {
  // 클래스에서 변수 선언시에 const let 같은 키워드를 사용하지 않음
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h3>클래스 State</h3>
        <div>Count : {this.state.count}</div>
        <button onClick={this.plusCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>
    );
  }

  minusCount = () => {
    //state 객체의 count 값을 감소
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  plusCount = () => {
    //state 객체의 count 값을 증가
    this.setState({ count: this.state.count + 1 });
  };
}

export default MyState;
