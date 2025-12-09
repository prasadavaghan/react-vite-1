import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const debounce = (text, delay) => {
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, text]);

  return debounceText;
};
export default function Debounce() {
  const [text, setText] = useState("");
  let debounceText = debounce(text, 1000);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello Prasad </h1>
      <input type="text" value={text} onChange={handleChange} />
      <div>Debounce Text : {debounceText}</div>
    </div>
  );
}
