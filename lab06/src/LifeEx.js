import { Component } from "react";

// 생명주기 mehtod는 클래스 컴포넌트에서 사용 가능
// Component 클래스의 생명주기 method를 상속

class LifeEx extends Component {
  state = {
    color: null, // 부모 Component 에서 전달받은 props 에서 동기화 시킬 State
    number: 0, // Component 에서 관리할 State
  };

  constructor(props) {
    super(props);

    console.log("constructor :", props.color);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps()");
    console.log("nextProps :", nextProps);
    console.log("prevState :", prevState);

    // Returns an update to a component's state based on its new props and old state.
    if (nextProps.color !== prevState.color) return { color: nextProps.color };

    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate()");
    console.log("nextProps()", nextProps);
    console.log("nextState()", nextState);
    console.log("nextContext()", nextContext);

    return nextState.number !== 3;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  componentDidCatch() {
    console.log("componentDidCatch()");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()");
    console.log("prevProps()", prevProps);
    console.log("prevState()", prevState);

    return "test";
    // return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate()");
    console.log("prevProps()", prevProps);
    console.log("prevState()", prevState);
    console.log("snapshot()", snapshot);

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  //// Error 코드
  //// 일반 event handler 함수에서 this의 의미는 이벤트가 발행한 html element를 가리킨다.
  //// 여기서 html element는 setState (리액트 Component)의 메서드를 가지고 있지 않음
  //   increaseNumber() {
  //     setState
  //
  //   }

  // arrow function에서의 this는 arrow function 을 정의하고 있는 component 객체
  increaseNumber = () => {
    // this.setState({ number: (this.state.number += 1) });
    this.setState(({ number }) => ({ number: number + 1 }));
  };

  render() {
    console.log("render()");

    const style = { color: this.state.color };

    return (
      <div>
        <h2 style={style}>{this.state.number}</h2>
        <h3 style={style}>{this.state.color}</h3>
        <button onClick={this.increaseNumber}>+</button>
      </div>
    );
  }
}

export default LifeEx;
