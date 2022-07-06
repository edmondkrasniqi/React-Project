import { Button, TextField } from "@mui/material";
import { PrivacyFormik } from "../../../lib/hooks/usePrivacyFormik";

interface Props {
  formik: PrivacyFormik;
}

export const PrivacyForm = ({ formik }: Props) => {
  return (
    <>
      <h2>Privacy Form</h2>

      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          rowGap: "15px",
          flexDirection: "column",
          width: "450px",
        }}
      >
        <TextField
          fullWidth
          type="Password"
          label="Current Password"
          name="currentPassword"
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
          error={
            !!formik.errors.currentPassword && formik.touched.currentPassword
          }
          helperText={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />

        <TextField
          fullWidth
          type="Password"
          label="New Password"
          name="newPassword"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          error={!!formik.errors.newPassword && formik.touched.newPassword}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          fullWidth
          type="Password"
          label="Confirm Password"
          name="confirmationPassword"
          value={formik.values.confirmationPassword}
          onChange={formik.handleChange}
          placeholder="Enter your Address"
          error={
            !!formik.errors.confirmationPassword &&
            formik.touched.confirmationPassword
          }
          helperText={
            formik.touched.confirmationPassword &&
            formik.errors.confirmationPassword
          }
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
};
