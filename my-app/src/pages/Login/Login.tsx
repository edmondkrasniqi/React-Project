import { Link } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { LoginForm } from "../../components/Login/LoginForm";

export const Login = () => {
  const formik = useLoginFormik({
    onSubmit(values) {
      onLogin(values.username);
    },
  });
  const { onLogin } = useAuthContext();

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
          color: "blue",
        }}
      >
        Register
      </Link>
    </div>
  );
};
