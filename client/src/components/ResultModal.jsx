import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function ResultModal({ open, isWon, secretWord, attempts }) {
  return (
    <Dialog open={open}>
      <DialogTitle>{isWon ? "You won!" : "Loser!"}</DialogTitle>
      <DialogContent>
        {isWon ? (
          <p>
            You won in {attempts} {attempts === 1 ? "attempt" : "attempts"}!
          </p>
        ) : (
          <p>
            The secret word was: <strong>{secretWord.toUpperCase()}</strong>
          </p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => window.location.reload()}>Try again</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResultModal;
