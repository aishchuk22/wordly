import { WORDS } from "../data/words";

const STATUS_PRIORITY = { correct: 3, present: 2, absent: 1 };

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

export function getLetterStatuses(guesses, secret) {
  const letterStatuses = {};

  for (const guess of guesses) {
    const result = evaluateGuess(guess, secret);
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      const status = result[i];
      const current = letterStatuses[letter];
      if (!current || STATUS_PRIORITY[status] > STATUS_PRIORITY[current]) {
        letterStatuses[letter] = status;
      }
    }
  }

  return letterStatuses;
}
