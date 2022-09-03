import {
  AccessTimeFilled,
  Add,
  CalendarToday,
  Public,
} from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import MeetingInfo from "./MeetingInfo";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ScheduleMeetingDialog({ open, handleClose }: Props) {
  const startsAt = dayjs().format("h:mm a");
  const endsAt = dayjs().add(15, "m").format("h:mm a, dddd, MMMM d, YYYY");

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
            <Box>
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                required
                variant="outlined"
              />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                required
                variant="outlined"
              />

              <Box
                sx={{
                  mt: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <Button variant="outlined" startIcon={<Add />} size="small">
                  Add Guests
                </Button>
              </Box>
            </Box>

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
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Schedule</Button>
      </DialogActions>
    </Dialog>
  );
}
