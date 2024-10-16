import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import cellData from "./components/cell_info.json";
import FlashCard from "./components/FlashCard";
function App() {
  const [index, setIndex] = useState(0);
  // const [card, setCard] = useState(cellData[0]);
  function handlePrevCard() {
    setIndex((prevIndex) => prevIndex - 1);
  }
  function handleNextCard() {
    setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>What do you know about cells?</h1>
        <h2>Number of cards: {cellData.length}</h2>
      </div>
      <FlashCard {...cellData[index]} />
      <Button onClick={handlePrevCard} disabled={index === 0 ? true : false}>
        &larr;
      </Button>
      <Button
        onClick={handleNextCard}
        disabled={index === cellData.length - 1 ? true : false}
      >
        &rarr;
      </Button>
      <Button>Shuffle Card</Button>
    </div>
  );
}

export default App;
