// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import MyComponent3 from "./components/MyComponent3";
import MyComponent4 from "./components/MyComponent4";

// props : properties. 부모 컴퍼넌트에서 자식 컴퍼넌트로 데이터를 전달 할 때 사용
// props 를 전달 할 때 부모 컴퍼넌트에서는 xml의 속성(attribute) 값으로 설정
// props 를 전달 받을 때 자식(함수형) 컴포넌트에서는 파라미터에 전달됨.

// 전달 하는 컴포넌트에서 하위 노드를 전달 받는 컴포넌트에게 props 로 전달 할 수 있음.
// 전달 받는 컴포넌트에서 노드를 전달 받을 때는 children 속성 값으로 전달 됨.

function App() {
  const test = "super 테스트";

  return (
    <>
      <MyComponent name="홍길동" />
      <hr></hr>
      <MyComponent2 age={20}>
        <span>
          <strong>React</strong>
        </span>
      </MyComponent2>
      <hr></hr>
      <MyComponent3 name="개발자" age={22}>
        <div>children</div>
      </MyComponent3>
      <hr></hr>
      <MyComponent4 age="11">
        <span id="aa">
          <strong>상속클래스</strong>
        </span>
        {/* <div>test</div> */}
      </MyComponent4>
    </>
  );
}

export default App;
