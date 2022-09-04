import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IAddGuest from "../../../interfaces/addGuest.interface";

interface Props {
  guests: IAddGuest[];
  removeGuest: (idx: number) => void;
}

export default function InvitedGuests({ guests, removeGuest }: Props) {
  return (
    <>
      <Typography
        color="textSecondary"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Invited Guests
      </Typography>

      <Box sx={{ display: "inline-flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
        {guests.map((guest, idx) => (
          <Chip
            key={guest.email + idx}
            label={guest.email}
            color="primary"
            variant="outlined"
            onDelete={() => removeGuest(idx)}
          />
        ))}
      </Box>
    </>
  );
}
