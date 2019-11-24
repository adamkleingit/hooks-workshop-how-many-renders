import React, { useState } from "react";
import ReactDOM from "react-dom";
let renders = 0;
function App() {
  const [, setCount] = useState(0);
  renders++;
  console.count("render");
  const twice = () => {
    setCount(val => val + 1);
    setCount(val => val + 1);
  };

  const handleClick = () => {
    twice();
  };

  // show batch API
  return (
    <div>
      <button onClick={handleClick}>Try Me!</button>
      <br />
      {renders}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
