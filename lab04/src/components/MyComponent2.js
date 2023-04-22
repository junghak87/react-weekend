// 함수형 컴포넌트
// props의 기본값 설정, 타입 체크
import PropTypes from "prop-types";

const MyComponent2 = (props) => {
  return (
    <>
      <p>Component2</p>
      <div>이름 : {props.name}</div>
      <div>나이 : {props.age}</div>
      <div>children : {props.children}</div>
    </>
  );
};

//Props 기본값 설정
MyComponent2.defaultProps = {
  name: "무명",
};

MyComponent2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyComponent2;
