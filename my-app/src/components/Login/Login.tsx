import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { LoginForm } from "./LoginForm";

// interface Props {
//   onLogin: (username: string) => void;
// }

export const Login = () => {
  const authContext = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values) {
      authContext.onLogin(values.username);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <LoginForm formik={formik} />
    </div>
  );
};
