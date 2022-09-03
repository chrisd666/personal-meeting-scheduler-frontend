import { Box, Typography } from "@mui/material";

interface Props {
  icon: JSX.Element;
  text: string;
}

export default function MeetingInfo({ icon, text }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}
