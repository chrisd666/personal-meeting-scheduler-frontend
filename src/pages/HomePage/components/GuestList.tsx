import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import IGuest from "../../../interfaces/guest.interface";

interface Props {
  guests: IGuest[];
}

export default function GuestList({ guests }: Props) {
  return (
    <List>
      {guests.map((guest) => {
        return (
          <Box key={guest.id}>
            <ListItem>
              <ListItemText primary={guest.name} secondary={guest.email} />
            </ListItem>

            <Divider variant="middle" sx={{ mt: 2 }} />
          </Box>
        );
      })}
    </List>
  );
}
