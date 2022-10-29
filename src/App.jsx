import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");
  const [size, setSize] = useState("45rem");
  const [vertical, setVertical] = useState("0");
  const [horizontal, setHorizontal] = useState("0");
  const [count, setCount] = useState(0);

  function handleClick() {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    setSize(Math.ceil(Math.random() * 45).toString() + "rem");
    setVertical(Math.floor(Math.random() * 20));
    setHorizontal(Math.floor(Math.random() * 80));
    setCount(count + 1);
  }
  return (
    <div className="App">
      <p>{count}</p>
      <h1
        onClick={() => handleClick()}
        style={{
          color: color,
          fontSize: size,
          marginTop: vertical + "%",
          marginLeft: horizontal + "%",
        }}
      >
        9
      </h1>
    </div>
  );
}

export default App;
