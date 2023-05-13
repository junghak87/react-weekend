import "./App.css";
import { useState } from "react";
import LifeEx from "./LifeEx.js";
import LifeEx2 from "./LifeEx2.js";
import LifeEx3 from "./LifeEx3.js";
import MemoEx from "./MemoEx";
import CallBackEx from "./CallBackEx";

function App() {
  const [color, setColor] = useState("#000000");
  const makeRandomColor = () => {
    const nextColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nextColor);
  };

  return (
    <div className="App">
      <CallBackEx />
      <hr />
      <MemoEx />
      <hr />
      <LifeEx3 />
      <hr />
      <LifeEx2 />
      <hr />
      <h1>Lifecycle Method</h1>
      <button onClick={makeRandomColor}>임의색상</button>
      <LifeEx color={color} />
    </div>
  );
}

export default App;
