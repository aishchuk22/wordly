import { useState } from "react";
import { WORDS } from "./data/words";

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function evaluateGuess(guess, secret) {
  const result = Array(guess.length).fill("absent");
  const secretLetters = secret.split("");

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretLetters[i]) {
      result[i] = "correct";
      secretLetters[i] = null;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "correct") {
      continue;
    }

    const idx = secretLetters.indexOf(guess[i]);
    if (idx !== -1) {
      result[i] = "present";
      secretLetters[idx] = null;
    }
  }

  return result;
}

console.log("Test", evaluateGuess("algae", "apple"));

function App() {
  const [secretWord] = useState(getRandomWord);
  const [guesses] = useState([]);
  const [currentGuess] = useState("");
  const [gameStatus] = useState("playing");

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Wordly</h1>
      <pre>{JSON.stringify({ secretWord, guesses, currentGuess, gameStatus }, null, 2)}</pre>
    </div>
  );
}

export default App;
