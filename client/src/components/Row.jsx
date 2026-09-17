import Tile from "./Tile";

function Row({ word = "", statuses }) {
  const letters = word.padEnd(5).split("");

  return (
    <div className="grid grid-cols-5 gap-2">
      {letters.map((letter, i) => {
        const trimmedLetter = letter.trim();
        const status = statuses ? statuses[i] : trimmedLetter ? "filled" : "empty";

        return <Tile key={i} letter={trimmedLetter} status={status} delay={i * 100} />;
      })}
    </div>
  );
}

export default Row;
