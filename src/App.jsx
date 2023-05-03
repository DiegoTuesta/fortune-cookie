import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import Button from "./components/Button";
import phrases from "./data/phrases.json";

function App() {
  const [index, setIndex] = useState(0);
  const outIndex = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div id="loader" className="loader--hidden">
        <div className="loader__container">
          <span></span>
        </div>
      </div>
      <div className="container">
        <h1>Fortune cookie</h1>
        <div className="card">
          <Message phrase={phrases[index]} />
        </div>
        <br />
        <Button outIndex={outIndex} phrase={phrases.length} />
      </div>
    </>
  );
}

export default App;
