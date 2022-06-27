import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";

export const MyProfile = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return <div>MY Profile</div>;
};
