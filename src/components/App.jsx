// this is used to import react
import React from "react";
// This is used to import useState from react
import { useState } from "react";

function App() {
  const [changed, setchanged] = useState("");
  const [changed2, setchanged2] = useState("");
  const [headingText, setHeadingText] = useState("");

  // function to get the value of anything typed on the input
  function handleChange(e) {
    setchanged(e.target.value);
  }

  function handleChange2(e) {
    setchanged2(e.target.value);
    console.log(e);
  }

  // Function that handles submit
  function handleSubmit() {
    setHeadingText(changed);
  }
  return (
    <div className="container">
      <h1>Hello, {headingText} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={changed}
      />
      {/* <p>{changed}</p> */}

      <input
        type="number"
        placeholder="What's your age?"
        onChange={handleChange2}
        value={changed2}
      />
      <p>{changed2}</p>
      <button onClick={handleSubmit}>Submit</button>
      <button
        onClick={() => {
          setHeadingText("");
        }}
      >
        CLEAR
      </button>
    </div>
  );
}

export default App;
