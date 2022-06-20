import { Button, TextField } from "@mui/material";
import { LoginFormik } from "../../lib/hooks/useLoginFormik";

interface Props {
  formik: LoginFormik;
}
export const LoginForm = ({ formik }: Props) => {
  return (
    <>
      <h1>Login Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          width: "400px",
        }}
      >
        <TextField
          label="Username"
          type="email"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <TextField
          type="Password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </>
  );
};
