import { Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";

// 함수형 컴포넌트에서 리턴하는 xml이 화면에 렌더링 됨.
function App() {
  const name = "홍길동";
  const name2 = "리액트.";
  const myStyle = {
    backgroundColor: "indianred",
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    padding: 16,
  };

  return (
    <>
      <h1>Hello, React!</h1>
      <h2>안녕하세요. {name}</h2>
      {/* 주석  */}

      <div>
        {/* 
           조건식 테스트
           조건식 ? 조건 참 값 : 조건 거짓 값 
        */}
        {name2 === "리액트" ? <span>React</span> : <span>Not React</span>}
      </div>

      <div>
        {/* 
           null 값은 렌더링 되지 않음
        */}
        {name2 === "리액트." ? <span>React</span> : null}
      </div>

      <div>
        {/* 
        false도 렌더링 되지 않음

        조건이 참일때만 렌더링하는 요소가 있고
        조건이 거짓일때 렌더링 하는 요소가 없는경우 AND (&&) 연산자를 이용할수 있음
         */}
        {name2 === "리액트" && <span>React</span>}
      </div>

      {/* 
      jsx에서 tag 속성 값을 설정할때 문자열만 따옴표("")를 사용하고 
      그 외에 값들은 중괄호 표현식 {} 사용한다. (변수, 객체 등..)
      
      e.g. inline 스타일 
      */}
      <div
        style={
          // react 에서 인식할 표현식
          {
            // javaScript Object
            backgroundColor: "aqua",
            color: "white",
            fontSize: 32, // 단위가 없는 경우 px 단위 (픽셀)
            fontWeight: "bold",
          }
        }
      >
        {name}
      </div>

      {/* 객체를 이용한 표현 */}
      <div style={myStyle}>{name}</div>

      <div className="my-style">{name}</div>

      {/* 
      Html 속성(attribute) 이름과 다른 경우
      - class -> className
      - for -> htmlFor 
       */}
    </>
  );
}

export default App;
