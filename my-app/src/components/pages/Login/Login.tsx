import { Button } from "@mui/material";

import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../../lib/hooks/useLoginFormik";
import { LoginForm } from "../../Login/LoginForm";

export const Login = () => {
  const formik = useLoginFormik({
    onSubmit(values) {
      onLogin(values.username);
    },
  });
  const { user, onLogin } = useAuthContext();
  if (user !== null) {
    return <Navigate to="/" />;
  }

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <LoginForm formik={formik} />
      <div style={{ marginTop: "10px", marginLeft: "200px" }}> Or</div>

      <Link
        to="/register"
        style={{
          textDecoration: "none",
          color: "whitesmoke",
        }}
      >
        <Button
          sx={{
            width: "400px",
          }}
          variant="contained"
        >
          Register
        </Button>
      </Link>
    </div>
  );
};
