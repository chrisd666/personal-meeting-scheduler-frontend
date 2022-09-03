import {
  ListItem,
  ListItemText,
  AvatarGroup,
  Avatar,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import dayjs from "dayjs";
import { stringToColor } from "../../../utils";

interface Props {
  meeting: {
    id: string;
    lengthInMinutes: number;
    timeZone: string;
    agenda?: string;
    endsAt: string;
    createdAt: string;
    guests: {
      id: string;
      name: string;
      email: string;
      meetingId: string;
    }[];
  };
}

export default function MeetingListItem({ meeting }: Props) {
  const startedAt = dayjs(meeting.createdAt).format("h:mm a");
  const endedAt = dayjs(meeting.endsAt).format("h:mm a, dddd, MMMM d, YYYY");

  return (
    <ListItem key={meeting.id}>
      <ListItemText
        primary={`${startedAt} - ${endedAt}`}
        secondary={
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>{meeting.agenda}</Typography>

              <AvatarGroup max={5}>
                {meeting.guests.map((guest) => (
                  <Avatar
                    sx={{
                      height: 32,
                      width: 32,
                      backgroundColor: stringToColor(guest.name),
                    }}
                    alt={guest.name}
                  >
                    {guest.name[0]}
                  </Avatar>
                ))}
              </AvatarGroup>
            </Box>

            <Divider sx={{ mt: 2 }} />
          </>
        }
      />
    </ListItem>
  );
}
