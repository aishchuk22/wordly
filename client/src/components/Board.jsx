import Row from "./Row";
import { evaluateGuess } from "../utils/wordUtils";

function Board({ guesses, currentGuess, secretWord }) {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    if (i < guesses.length) {
      rows.push(<Row key={i} word={guesses[i]} statuses={evaluateGuess(guesses[i], secretWord)} />);
    } else if (i === guesses.length) {
      rows.push(<Row key={i} word={currentGuess} />);
    } else {
      rows.push(<Row key={i} word="" />);
    }
  }

  return <div className="flex flex-col gap-2">{rows}</div>;
}

export default Board;
