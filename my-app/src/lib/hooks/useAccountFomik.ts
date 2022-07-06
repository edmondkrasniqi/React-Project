import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

const AccountSchema = Yup.object().shape({
  username: Yup.string()
    .email("please enter a valid email!")
    .required("Username is required!"),
  password: Yup.string()
    .min(6, "Your password must be minimun 6 characters long")
    .required("pasword is required"),

  address: Yup.string()
    .min(3, "your addres must be minimun 3 characters long")
    .required("Address is required"),
});

export interface AccountFields {
  username: string;
  email: string;
  address: string;
}
interface UseaccountFormOptions {
  onSubmit: (
    values: AccountFields,
    formikHelpers: FormikHelpers<AccountFields>
  ) => void;
}

export const useAccountFormik = (props: UseaccountFormOptions) => {
  return useFormik<AccountFields>({
    initialValues: {
      username: "",
      email: "",
      address: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: AccountSchema,
    onSubmit: props.onSubmit,
  });
};

export type AccountFormik = ReturnType<typeof useAccountFormik>;
