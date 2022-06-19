import { Button, TextField } from "@mui/material";
import { useLoginFormik } from "../lib/hooks/useLoginFormik";

export const Login = () => {
  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
      console.info("values", values);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
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
        <TextField label="Username" />
        <TextField
          type="Password"
          label="Password"
          autoComplete="current-password"
        />
        <Button variant="contained">Log in</Button>
      </form>
    </div>
  );
};
