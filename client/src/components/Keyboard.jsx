import { getLetterStatuses } from "../utils/wordUtils";

const ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
];

const keyStyle = {
  empty: "bg-gray-200 text-gray-900",
  correct: "bg-green-500 text-white",
  present: "bg-yellow-500 text-white",
  absent: "bg-gray-500 text-white",
};

function Keyboard({ guesses, secretWord }) {
  const letterStatuses = getLetterStatuses(guesses, secretWord);

  return (
    <div className="flex flex-col gap-2">
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => {
            const isSpecial = key === "enter" || key === "backspace";
            const status = letterStatuses[key] || "empty";

            return (
              <button
                key={key}
                type="button"
                className={`h-12 rounded font-bold uppercase flex items-center justify-center ${isSpecial ? "px-3 text-xs" : "w-9"} ${keyStyle[status]}`}
              >
                {key === "backspace" ? "⌫" : key === "enter" ? "Enter" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
