const statusStyle = {
  empty: "border-2 border-gray-300",
  filled: "border-2 border-gray-500 text-gray-900",
  correct: "bg-green-500 text-white border-2 border-green-500",
  present: "bg-yellow-500 text-white border-2 border-yellow-500",
  absent: "bg-gray-500 text-white border-2 border-gray-500",
};

function Tile({ letter, status = "empty", delay = 0 }) {
  const isRevealed = status === "correct" || status === "present" || status === "absent";

  return (
    <div
      className={`w-14 h-14 flex items-center justify-center text-2xl font-bold uppercase ${statusStyle[status]} ${isRevealed ? "animate-flip" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {letter}
    </div>
  );
}

export default Tile;
