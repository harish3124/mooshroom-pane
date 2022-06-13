import { useState } from "react";

const GifInput = ({ gifList, setGifList }) => {
  const [input, setInput] = useState("");

  const updateInput = async () => {
    if (input !== "") {
      setGifList([...gifList, input])
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
