import IterationExample from "./IterationExample";
import IterationExample2 from "./IterationExample2";

function App() {
  const items = ["React", "Vue", "Angular", "JQuery"];
  const items2 = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "JQuery" },
  ];

  return (
    <div className="App">
      <IterationExample2 items={items2} />
      <hr />
      <IterationExample items={items} />
    </div>
  );
}

export default App;
