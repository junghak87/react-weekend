// 함수형 Component
// Component의 이름은 대문자로 시작하고 camel 표기법을 사용

// function MyComponent() {
//   return <></>;
// }

const MyComponent = (props) => {
  // 부모 컴포넌트에서 {attrName  : attrValue  ...} 객체를 파라미터에 전달
  // console.log(props);s

  return (
    <>
      <p>Component1</p>
      <h1>hello, {props.name}</h1>
      <h1>나이, {props.age}</h1>
    </>
  );
};

export default MyComponent;
// 다른 파일에서 현재의 js 파일을 참조할때 가져갈 내용을 export 처리
