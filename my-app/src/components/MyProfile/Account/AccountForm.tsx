import { Button, TextField } from "@mui/material";
import { AccountFormik } from "../../../lib/hooks/useAccountFomik";

interface Props {
  formik: AccountFormik;
}

export const AccountForm = ({ formik }: Props) => {
  return (
    <>
      <h2>Account Form</h2>

      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          rowGap: "15px",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <TextField
          fullWidth
          onChange={formik.handleChange}
          label="Username"
          placeholder="Enter your Username"
          name="username"
          value={formik.values.username}
          error={!!formik.errors.username && formik.touched.username}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          fullWidth
          onChange={formik.handleChange}
          label="Email"
          placeholder="Enter your Username"
          name="email"
          value={formik.values.email}
          error={!!formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          type="text"
          label="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          placeholder="Enter your Address"
          name="address"
          error={!!formik.errors.address && formik.touched.address}
          helperText={formik.touched.address && formik.errors.address}
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
};
