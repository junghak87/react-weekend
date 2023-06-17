import { useRef } from "react";

const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: i,
    imageUrl: `https://placekitten.com/240/200?image=${i}`,
  });
}

const ScrollDOM2 = () => {
  const itemsRef = useRef(new Map());

  // 콜백 함수를 이용해 ref에 DOM 노드 참조
  const addNode = (id, node) => {
    const map = itemsRef.current;
    map.set(id, node); // map에 key가 id 고 value가 node 인 요소 추가
    // console.log(map);
  };

  const moveToNumber = (id) => {
    const map = itemsRef.current;

    //map.get(id) 는 <li>를 가지고 있음
    map.get(id).scrollIntoView({
      behaavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    // itemsRef[id].current.scrollIntoView({
    //   behaavior: "smooth",
    //   block: "nearest",
    //   inline: "center",
    // });
  };

  return (
    <div>
      <h2>Scroll DOM2</h2>
      <nav>
        <button onClick={() => moveToNumber(0)}>1</button>
        <button onClick={() => moveToNumber(5)}>2</button>
        <button onClick={() => moveToNumber(9)}>3</button>
      </nav>
      <ul>
        {cats.map((cat) => (
          // ref 속성에는 ref자체 값을 할당하거나, callback 함수를 할당 할 수 있다.
          // callback 예시 : 만들어지는 dom node (여기서는 li) 값으로 넘겨주고 addNode 에서 할당된 ref 값을 받아간다.
          <li key={cat.id} ref={(node) => addNode(cat.id, node)}>
            <img src={cat.imageUrl} alt={`cat ${cat.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollDOM2;
