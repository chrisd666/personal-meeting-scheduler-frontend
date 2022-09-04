import { Add } from "@mui/icons-material";
import { Box, Button, Typography, Divider } from "@mui/material";
import Layout from "../../components/Layout";
import MeetingList from "./components/MeetingList";
import ScheduleMeetingDialog from "./components/ScheduleMeetingDialog";

export default function HomePage() {
  const data = [
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e0",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e0",
        },
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5d",
          name: "Rose",
          email: "rose@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e0",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e1",
      lengthInMinutes: 15,
      timeZone: "IST",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e1",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e2",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e2",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e3",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e3",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e4",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e4",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e5",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e5",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e6",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e6",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e7",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e7",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e8",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e8",
        },
      ],
    },
    {
      id: "46d317e5-9c73-4160-8b79-01ef6d3b20e9",
      lengthInMinutes: 15,
      timeZone: "IST",
      agenda: "My first meeting!",
      endsAt: "2022-09-02T18:01:01.057Z",
      createdAt: "2022-09-02T17:46:01.560Z",
      guests: [
        {
          id: "0b595afd-7950-4e5c-995a-a84a9b7b6a5c",
          name: "Chris",
          email: "chris@mail.com",
          meetingId: "46d317e5-9c73-4160-8b79-01ef6d3b20e9",
        },
      ],
    },
  ];

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

          <Button variant="contained" startIcon={<Add />}>
            Schedule
          </Button>
        </Box>

        <Divider sx={{ mt: 2 }} />

        <MeetingList meetings={data} />
      </Box>

      <ScheduleMeetingDialog open={true} handleClose={() => {}} />
    </Layout>
  );
}
