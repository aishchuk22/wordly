import { WORDS } from "../data/words";

export function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function evaluateGuess(guess, secret) {
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
