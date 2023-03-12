import { useEffect, useState } from "react";
import IconDice from "./assets/dice-icon.svg";
import DividerPattern from "./assets/pattern-divider.svg";

import "./styles.scss";

export default function App() {
  const [adviceData, setAdviceData] = useState(null);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((resp) => resp.json())
      .then((data) => setAdviceData(data.slip));
  }, []);

  const fetchNewAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((resp) => resp.json())
      .then((data) => setAdviceData(data.slip));
  };

  return (
    <main className="App">
      {adviceData && (
        <div className="card">
          <h1>ADVICE #{adviceData.id}</h1>
          <p>{adviceData.advice}</p>

          <img className="divider" src={DividerPattern} alt="divider" />

          <button onClick={fetchNewAdvice}>
            <img src={IconDice} alt="dice icon" />
          </button>
        </div>
      )}
    </main>
  );
}
