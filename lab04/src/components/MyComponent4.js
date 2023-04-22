import { Component } from "react";
import propTypes from "prop-types";

// 클래스형 Component : React.Component 클래스를 상속 받는 클래스를 선언
// render() 메서드를 작성 - jsx 를 리턴

// 부모 컴퍼넌트에서 전달받은 props 는 생성자 (constructor) 작성시
// 부모 생성자 호출 (super(props))

class MyComponent4 extends Component {
  static defaultProps = {
    name: "anonymus",
    age: 99,
  };

  static propTypes = {
    name: propTypes.string,
    age: propTypes.number,
  };

  // render 메소드 정의 - function 키워드를 사용하지 않음
  render() {
    // console.log(super.name);
    const { name, age, children } = this.props;

    // let divChildren = children.filter((child) => child.type === "div");

    return (
      <div>
        <p>Component4</p>
        <h1>hello, Class Component</h1>
        <h2>안녕하세요, {name}</h2>
        <h2>나이 : {age}</h2>
        <div>{children}</div>
      </div>
    );
  }
}

// 클래스 외부에서

// MyComponent4.defaultProps = {
//   name: "무명",
// };

export default MyComponent4;
