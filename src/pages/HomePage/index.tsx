import { Add } from "@mui/icons-material";
import { Box, Button, Typography, Divider } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/Layout";
import Toast from "../../components/Toast";
import config from "../../config";
import MeetingList from "./components/MeetingList";
import MeetingLoadingSkeleton from "./components/MeetingLoadingSkeleton";
import ScheduleMeetingDialog from "./components/ScheduleMeetingDialog";

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);

  const fetchMeetings = async () => {
    const response = await axios.get(config.serverUrl + "/meetings");

    if (response?.data?.payload) return response.data.payload;
  };

  const { data, isLoading } = useQuery(["meetings"], fetchMeetings, {
    onError: () => handleOpenErrorToast(),
  });

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleOpenSuccessToast = () => setIsSuccessToastOpen(true);
  const handleCloseSuccessToast = () => setIsSuccessToastOpen(false);
  const handleOpenErrorToast = () => setIsErrorToastOpen(true);
  const handleCloseErrorToast = () => setIsErrorToastOpen(false);

  return (
    <Layout>
      <Box sx={{ py: 4 }}>
        <Box
          className="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Your Meetings
          </Typography>

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleOpenDialog}
          >
            Schedule
          </Button>
        </Box>

        <Divider sx={{ mt: 2 }} />

        {isLoading ? (
          <MeetingLoadingSkeleton />
        ) : (
          <MeetingList meetings={data || []} />
        )}
      </Box>

      <ScheduleMeetingDialog
        open={isDialogOpen}
        handleClose={handleCloseDialog}
        handleOpenSuccessToast={handleOpenSuccessToast}
        handleOpenErrorToast={handleOpenErrorToast}
      />

      <Toast
        isOpen={isSuccessToastOpen}
        severity="success"
        message="You have scheduled a meeting!"
        handleClose={handleCloseSuccessToast}
      />

      <Toast
        isOpen={isErrorToastOpen}
        severity="error"
        message="Something went wrong"
        handleClose={handleCloseErrorToast}
      />
    </Layout>
  );
}
