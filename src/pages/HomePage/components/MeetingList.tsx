import { List } from "@mui/material";
import MeetingListItem from "./MeetingListItem";

interface Props {
  meetings: {
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
  }[];
}

export default function MeetingList({ meetings }: Props) {
  return (
    <List>
      {meetings.map((meeting) => {
        return <MeetingListItem meeting={meeting} />;
      })}
    </List>
  );
}
