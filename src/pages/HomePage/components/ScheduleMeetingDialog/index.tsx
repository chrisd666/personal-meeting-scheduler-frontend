import { AccessTimeFilled, CalendarToday, Public } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import IAddGuest from "../../../../interfaces/addGuest.interface";
import InvitedGuests from "../InvitedGuests";
import MeetingInfo from "../MeetingInfo";
import GuestForm from "./GuestForm";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ScheduleMeetingDialog({ open, handleClose }: Props) {
  const [guests, setGuests] = useState<IAddGuest[]>([]);
  const [agenda, setAgenda] = useState("");

  const addGuest = (guest: IAddGuest) => setGuests([...guests, guest]);
  const removeGuest = (idx: number) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(idx, 1);

    setGuests(updatedGuests);
  };

  const startsAt = dayjs().format("h:mm a");
  const endsAt = dayjs().add(15, "m").format("h:mm a, dddd, MMMM D, YYYY");

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogTitle>Schedule Meeting</DialogTitle>
      <DialogContent>
        <Grid container rowGap={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              15 Minute Meeting
            </Typography>

            <Box>
              <MeetingInfo
                icon={<AccessTimeFilled sx={{ mr: 1, fontSize: "20px" }} />}
                text="15 min"
              />

              <MeetingInfo
                icon={<CalendarToday sx={{ mr: 1, fontSize: "20px" }} />}
                text={`${startsAt} - ${endsAt}`}
              />

              <MeetingInfo
                icon={<Public sx={{ mr: 1, fontSize: "20px" }} />}
                text="Indian Standard Time"
              />
            </Box>
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
        <Button
          variant="contained"
          disabled={guests.length === 0 && true}
          onClick={handleClose}
        >
          Schedule
        </Button>
      </DialogActions>
    </Dialog>
  );
}
