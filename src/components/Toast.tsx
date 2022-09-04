import { Alert, Snackbar } from "@mui/material";
import IToast from "../interfaces/toast.interface";

interface Props extends IToast {
  isOpen: boolean;
  handleClose: () => void;
}

export default function Toast({
  isOpen,
  severity,
  message,
  handleClose,
}: Props) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
