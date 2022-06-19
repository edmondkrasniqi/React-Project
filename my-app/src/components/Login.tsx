import { Button, TextField } from "@mui/material";

export const Login = () => {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <h1>Login Form</h1>
      <form
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
