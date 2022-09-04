import {
  ListItem,
  ListItemText,
  AvatarGroup,
  Avatar,
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
  const endedAt = dayjs(meeting.endsAt).format("h:mm a, dddd, MMMM D, YYYY");

  return (
    <>
      <ListItem
        key={meeting.id}
        secondaryAction={
          <AvatarGroup max={5}>
            {meeting.guests.map((guest) => (
              <Avatar
                key={guest.id}
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
        }
      >
        <ListItemText
          primary={`${startedAt} - ${endedAt}`}
          secondary={meeting.agenda}
        />
      </ListItem>

      <Divider variant="middle" sx={{ mt: 2 }} />
    </>
  );
}
