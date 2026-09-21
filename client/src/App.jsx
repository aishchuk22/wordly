import { useState } from "react";
import { getRandomWord } from "./utils/wordUtils";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  const [secretWord] = useState(getRandomWord);
  const [guesses] = useState(["apple", "beach"]);
  const [currentGuess] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <h1 className="text-3xl font-bold text-blue-600">Wordly</h1>
      <Board guesses={guesses} currentGuess={currentGuess} secretWord={secretWord} />
      <Keyboard guesses={guesses} secretWord={secretWord} />
    </div>
  );
}

export default App;
