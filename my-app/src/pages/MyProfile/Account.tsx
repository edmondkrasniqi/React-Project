import { AccountForm } from "../../components/MyProfile/Account/AccountForm";
import { useAccountFormik } from "../../lib/hooks/useAccountFomik";

const Account = () => {
  const formik = useAccountFormik({
    onSubmit(values) {
      console.info(values);
    },
  });

  return (
    <div style={{ margin: "35px" }}>
      <AccountForm formik={formik} />
    </div>
  );
};

export default Account;
