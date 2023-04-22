const MyComponent3 = ({ name, age, children }) => {
  // 구조 분해 할당 (destructuring assigment)
  //   const { name, age, children } = props;

  return (
    <>
      <p>Component3</p>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <div>{children}</div>
    </>
  );
};

export default MyComponent3;
