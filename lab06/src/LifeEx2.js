import { Component } from "react";

export default class LifeEx2 extends Component {
  state = {
    now: new Date(), // 현 시간 정보를 state로 관리
    intervalId: null, // setInterval 의 리턴값을 state로 관리
  };

  render() {
    const { now } = this.state;

    return (
      <div>
        <h1>Lifecycle을 이용한 함수 </h1>
        <h2>{now.toLocaleTimeString()}</h2>
        <h3>{now.toLocaleDateString()}</h3>
      </div>
    );
  }

  componentDidMount() {
    const id = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);

    this.setState({ intervalId: id });

    return true;
  }

  componentWillUnmount() {
    const id = this.state.intervalId;
    if (id !== null) clearInterval(id);
  }
}
