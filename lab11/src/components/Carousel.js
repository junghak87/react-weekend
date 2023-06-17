import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: i,
    imageUrl: `https://placekitten.com/240/200?image=${i}`,
  });
}

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const handelfindNextImage = () => {
    // webpack에서 안되는 원인 확인
    flushSync(() => {
      if (index < cats.length - 1) {
        setIndex(index + 1);
      }
    });

    console.log(index);
    // 버튼 클릭시 selectedRef에 해당되는 DOM 요소 값을 변경해야한다.
    selectedRef.current.scrollIntoView({
      behaavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handelfindPrevImage = () => {
    if (index >= 1) {
      setIndex(index - 1);
      selectedRef.current.scrollIntoView({
        behaavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div>
      <h2>Carousel</h2>
      <nav>
        <button onClick={handelfindPrevImage}>Prev</button>
        <button onClick={handelfindNextImage}>Next</button>
      </nav>
      <div>
        <ul>
          {cats.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img className={index === i ? "active" : null} src={cat.imageUrl} alt={`cat ${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
