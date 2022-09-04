import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import IAddGuest from "../../../../interfaces/addGuest.interface";

interface Props {
  addGuest: (guest: IAddGuest) => void;
}

const validationSchema = yup.object({
  name: yup.string().required("Please enter a name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter an email"),
});

export default function GuestForm({ addGuest }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addGuest(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="dense"
        id="name"
        label="Name *"
        type="text"
        fullWidth
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        margin="dense"
        id="email"
        label="Email *"
        fullWidth
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <Box
        sx={{
          mt: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button
          type="submit"
          variant="outlined"
          startIcon={<Add />}
          size="small"
        >
          Add Guests
        </Button>
      </Box>
    </form>
  );
}
