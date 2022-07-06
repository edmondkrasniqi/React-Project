import { FormikHelpers, useFormik } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  preferences: Yup.string().required("preferences must be selected"),
  gender: Yup.string().required("Gender must be selected"),
  username: Yup.string()
    .required("A username is required")
    .min(2, "Username must be at least 2 characters"),
  age: Yup.number()
    .required("Please supply your age")
    .min(16, "You must be at least 16 years"),
  email: Yup.string().email().required("Email is a required field"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password: string) => password && password.length > 0,
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});

export interface SignupFields {
  username: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  preferences: string;
}

interface UseSignupFormOptions {
  onSubmit: (
    values: SignupFields,
    formikHelpers: FormikHelpers<SignupFields>
  ) => void;
}

export const useSignupFormik = (props: UseSignupFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      password: "",
      age: "",
      email: "",
      confirmPassword: "",
      gender: "",
      preferences: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });
};

export type SignupFormik = ReturnType<typeof useSignupFormik>;
