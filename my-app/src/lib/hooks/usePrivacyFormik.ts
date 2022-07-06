import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const PrivacySchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, "your password must be 8 characters long")
    .required("Password is required!"),
  newPassword: Yup.string()
    .min(8, "Your password must be minimun 8 characters long")
    .required("pasword is required"),
  confirmationPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (newPassword: string) => newPassword && newPassword.length > 0,
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Password doesn't match"
      ),
    }),
});

export interface PrivacyFields {
  currentPassword: string;
  newPassword: string;
  confirmationPassword: string;
}

interface UsePrivacyFormOptions {
  onSubmit: (
    values: PrivacyFields,
    formikHelpers: FormikHelpers<PrivacyFields>
  ) => void;
}
export const usePrivacyFormik = (props: UsePrivacyFormOptions) => {
  return useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmationPassword: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: PrivacySchema,
    onSubmit: props.onSubmit,
  });
};

export type PrivacyFormik = ReturnType<typeof usePrivacyFormik>;
