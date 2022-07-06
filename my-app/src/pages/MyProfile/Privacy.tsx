import { PrivacyForm } from "../../components/MyProfile/Privacy/PrivacyForm";
import { usePrivacyFormik } from "../../lib/hooks/usePrivacyFormik";

export const Privacy = () => {
  const formik = usePrivacyFormik({
    onSubmit(values) {
      console.info(values);
    },
  });

  return (
    <div style={{ margin: "35px" }}>
      <PrivacyForm formik={formik} />
    </div>
  );
};

export default Privacy;
