import { AccessTimeFilled, CalendarToday, Public } from "@mui/icons-material";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import MeetingInfoField from "./MeetingInfoField";

export default function MeetingInfo() {
  const startsAt = dayjs().format("h:mm a");
  const endsAt = dayjs().add(15, "m").format("h:mm a, dddd, MMMM D, YYYY");

  return (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        15 Minute Meeting
      </Typography>

      <MeetingInfoField
        icon={<AccessTimeFilled sx={{ mr: 1, fontSize: "20px" }} />}
        text="15 min"
      />

      <MeetingInfoField
        icon={<CalendarToday sx={{ mr: 1, fontSize: "20px" }} />}
        text={`${startsAt} - ${endsAt}`}
      />

      <MeetingInfoField
        icon={<Public sx={{ mr: 1, fontSize: "20px" }} />}
        text="Indian Standard Time"
      />
    </>
  );
}
