import { useState } from "react";

const GifInput = () => {
  const [input, setInput] = useState("");

  const updateInput = () => {
    if (input != "") {
      console.log(input);

      setInput("");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        className="inputBox"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="btn" onClick={updateInput}>
        Submit
      </div>
    </div>
  );
};

export default GifInput;
