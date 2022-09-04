import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import IAddGuest from "../../../../interfaces/addGuest.interface";
import InvitedGuests from "../InvitedGuests";
import GuestForm from "./GuestForm";
import MeetingInfo from "./MeetingInfo";

interface Props {
  state: {
    open: boolean;
    agenda: string;
    guests: IAddGuest[];
    isLoading: boolean;
  };
  handler: {
    handleClose: () => void;
    removeGuest: (idx: number) => void;
    addGuest: (guest: IAddGuest) => void;
    setAgenda: React.Dispatch<React.SetStateAction<string>>;
    handleSchedule: () => void;
  };
}

export default function ScheduleMeetingDialogPresentation({
  state,
  handler,
}: Props) {
  const { open, guests, agenda, isLoading } = state;
  const { handleClose, removeGuest, addGuest, setAgenda, handleSchedule } =
    handler;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogTitle>Schedule Meeting</DialogTitle>
      <DialogContent>
        <Grid container rowGap={2}>
          <Grid item xs={12} md={6}>
            <MeetingInfo />
          </Grid>

          <Grid item xs={12} md={6}>
            {guests.length > 0 && (
              <InvitedGuests guests={guests} removeGuest={removeGuest} />
            )}

            <GuestForm addGuest={addGuest} />

            <Divider sx={{ my: 2 }} />

            <TextField
              margin="dense"
              id="agenda"
              label="Agenda"
              type="text"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={agenda}
              onChange={(e) => setAgenda(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          disabled={guests.length === 0 && true}
          onClick={handleSchedule}
        >
          Schedule
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
