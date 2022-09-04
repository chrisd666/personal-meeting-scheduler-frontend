import { AlertColor } from "@mui/material";

export default interface IToast {
  severity: AlertColor;
  message: string;
}
