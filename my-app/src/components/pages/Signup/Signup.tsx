import { useSignupFormik } from "../../../lib/hooks/useSignupFormik";
import { SignupForm } from "../../Signup/SignUpForm";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const formik = useSignupFormik({
    onSubmit(values) {
      navigate("/login");
      console.info(values);
    },
  });

  return (
    <div>
      <SignupForm formik={formik} />
    </div>
  );
};
