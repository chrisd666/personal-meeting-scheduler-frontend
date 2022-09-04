import {
  ListItem,
  ListItemText,
  AvatarGroup,
  Avatar,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import IMeeting from "../../../interfaces/meeting.interface";
import { stringToColor } from "../../../utils";
import GuestList from "./GuestList";

interface Props {
  meeting: IMeeting;
}

export default function MeetingListItem({ meeting }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const startedAt = dayjs(meeting.createdAt).format("h:mm a");
  const endedAt = dayjs(meeting.endsAt).format("h:mm a, dddd, MMMM D, YYYY");

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <ListItem
        key={meeting.id}
        secondaryAction={
          <AvatarGroup
            max={3}
            total={meeting.guests.length}
            spacing="small"
            onClick={handleOpenDialog}
            sx={{ cursor: "pointer" }}
          >
            {meeting.guests.map((guest) => (
              <Avatar
                key={guest.id}
                sx={{
                  backgroundColor: stringToColor(guest.name),
                }}
                alt={guest.name}
              >
                {guest.name[0]}
              </Avatar>
            ))}
          </AvatarGroup>
        }
      >
        <ListItemText
          primary={
            <Typography sx={{ width: "70%" }}>
              {startedAt} - {endedAt}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ width: "70%" }}
            >
              {meeting.agenda}
            </Typography>
          }
        />
      </ListItem>

      <Divider variant="middle" sx={{ mt: 2 }} />

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="lg">
        <DialogTitle>Invited Guests</DialogTitle>
        <DialogContent>
          <GuestList guests={meeting.guests} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
