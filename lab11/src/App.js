import { useRef } from "react";
import StateVsRef from "./components/StateVsRef";
import Stopwatch from "./components/Stopwatch";
import RefDOM from "./components/RefDOM";
import ForwardRef from "./components/ForwardRef";
import ForwardRefEx from "./components/ForwardRefEx";
import ScrollDOM from "./components/ScrollDOM";
import ScrollDOM2 from "./components/ScrollDOM2";
import Carousel from "./components/Carousel";
import Video from "./components/Video";

function App() {
  const ref = useRef(0);
  console.log(ref);

  const handleClick = () => {
    ref.current++;
    alert(`${ref.current}번 클릭`);
  };

  return (
    <div className="App">
      <h1>useRef</h1>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <hr />
      <StateVsRef />
      <hr />
      <Stopwatch />
      <hr />
      <RefDOM />
      <hr />
      <ForwardRef />
      <hr />
      <ForwardRefEx />
      <hr />
      <ScrollDOM />
      <hr />
      <ScrollDOM2 />
      <hr />
      <Carousel />
      <hr />
      <Video />
    </div>
  );
}

export default App;
