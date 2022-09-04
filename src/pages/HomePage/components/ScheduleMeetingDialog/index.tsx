import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import config from "../../../../config";
import IAddGuest from "../../../../interfaces/addGuest.interface";
import IAddMeeting from "../../../../interfaces/addMeeting.interface";
import ScheduleMeetingDialogPresentation from "./ScheduleMeetingDialog.presentation";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOpenSuccessToast: () => void;
  handleOpenErrorToast: () => void;
}

export default function ScheduleMeetingDialog({
  open,
  handleClose,
  handleOpenSuccessToast,
  handleOpenErrorToast,
}: Props) {
  const [guests, setGuests] = useState<IAddGuest[]>([]);
  const [agenda, setAgenda] = useState("");

  const queryClient = useQueryClient();
  const addGuest = (guest: IAddGuest) => setGuests([...guests, guest]);
  const removeGuest = (idx: number) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(idx, 1);

    setGuests(updatedGuests);
  };

  const scheduleMeeting = async (meeting: IAddMeeting) => {
    const response = await axios.post(config.serverUrl + "/meetings", meeting);

    if (response?.data?.payload) return true;
  };

  const closeDialog = () => {
    setGuests([]);
    setAgenda("");
    handleClose();
  };

  const { mutate, isLoading } = useMutation(scheduleMeeting, {
    onSuccess: () => {
      queryClient.invalidateQueries(["meetings"]);
      closeDialog();
      handleOpenSuccessToast();
    },
    onError: () => handleOpenErrorToast(),
  });

  const handleSchedule = () => {
    const body: IAddMeeting = { guests };

    if (agenda) body.agenda = agenda;

    mutate(body);
  };

  return (
    <ScheduleMeetingDialogPresentation
      state={{
        agenda,
        guests,
        isLoading,
        open,
      }}
      handler={{
        addGuest,
        handleClose,
        handleSchedule,
        removeGuest,
        setAgenda,
      }}
    />
  );
}
