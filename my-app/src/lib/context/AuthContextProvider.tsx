import { AuthContext, AuthContextFields } from "./AuthContext/AuthContext";
import { useState } from "react";
import { Role } from "../ProtectedRoute/RouteWrapper";

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(() => {
    const value = localStorage.getItem("user");
    return value;
  });

  const [userRole, setRole] = useState<Role>("admin");
  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const context: AuthContextFields = {
    user,
    userRole,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
