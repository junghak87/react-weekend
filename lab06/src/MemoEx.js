import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("getAverage()");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum / numbers.length;
};

const MemoEx = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  // state만 사용할때의 단점
  // input 에서 값을 입력해서 state 값이 변경 될때마다 해당 function은 계속 호출됨 (비효율)
  // useMemo를 이용해서
  //   const average = getAverage(list);

  //   useMemo(() => first, [second]) , second가 변경될때만 사용
  const average = useMemo(() => getAverage(list), [list]);

  const onChange = (e) => setNumber(e.target.value);
  const onClick = (e) => {
    const nextList = list.concat(Number(number));
    setList(nextList);
    setNumber("");

    console.log(nextList);
  };

  return (
    <div>
      <h1>useMemo Hook</h1>
      <input type="number" value={number} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균 : {average}</div>
    </div>
  );
};

export default MemoEx;
