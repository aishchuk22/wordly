import { useState, useEffect, useCallback } from "react";
import { getRandomWord } from "./utils/wordUtils";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  const [secretWord] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const isWon = guesses.includes(secretWord);
  const isLost = !isWon && guesses.length >= 6;
  const isGameOver = isWon || isLost;

  const handleKey = useCallback(
    (key) => {
      if (isGameOver) return;

      if (key === "enter") {
        if (currentGuess.length !== 5) return;
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
      } else if (key === "backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (/^[a-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key);
      }
    },
    [isGameOver, currentGuess, guesses],
  );

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      if (event.key === "Enter") {
        handleKey("enter");
      } else if (event.key === "Backspace") {
        handleKey("backspace");
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        handleKey(event.key.toLowerCase());
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKey]);

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <h1 className="text-3xl font-bold text-blue-600">Wordly</h1>
      <Board guesses={guesses} currentGuess={currentGuess} secretWord={secretWord} />
      <Keyboard guesses={guesses} secretWord={secretWord} onKeyClick={handleKey} />
    </div>
  );
}

export default App;
