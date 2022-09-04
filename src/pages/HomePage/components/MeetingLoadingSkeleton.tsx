import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export default function MeetingLoadingSkeleton() {
  const rows = [];

  for (let i = 0; i < 5; i++) {
    rows.push(
      <Box
        key={i}
        sx={{
          w: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          height={20}
          sx={{ mb: 1, maxWidth: "90%" }}
        />
        <Skeleton
          variant="rectangular"
          height={16}
          sx={{ mb: 2, maxWidth: "40%" }}
        />
      </Box>
    );
  }

  return <>{rows}</>;
}
