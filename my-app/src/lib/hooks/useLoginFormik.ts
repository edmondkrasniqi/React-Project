import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  usernamme: Yup.string().required("Username is required!"),
  password: Yup.string()
    .min(6, "Your password must be minimun 6 characters long")
    .required("pasword is required"),
});

export interface LoginFields {
  username: string;
  password: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}
export const useLoginFormik = (props: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: props.onSubmit,
  });
};

export type LoginFormik = ReturnType<typeof useLoginFormik>;
