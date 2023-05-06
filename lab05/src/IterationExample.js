const IterationExample = (props) => {
  const items = props.items;

  return (
    <div>
      <h3>Iteration 예제 - List 만들기</h3>
      <ul>
        {items.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationExample;
