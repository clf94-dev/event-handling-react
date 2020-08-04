import React, { useState } from "react";

function App() {
  const [hover, setColor] = useState(false);

  function changeColor() {
    setColor(true);
  }
  function resetColor() {
    setColor(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={resetColor}
        onMouseOver={changeColor}
        style={{ backgroundColor: hover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
