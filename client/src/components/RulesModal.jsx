import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function RulesModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Rules</DialogTitle>
      <DialogContent>
        <p>Guess in 6 tries</p>
        <p>Tile color shows how close you are:</p>
        <ul>
          <li>🟩 Present and placed correctly </li>
          <li>🟨 Present but wrong place </li>
          <li>⬜ No match </li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default RulesModal;
