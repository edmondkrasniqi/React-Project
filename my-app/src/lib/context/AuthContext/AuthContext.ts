import React, { useContext } from "react";
import { Role } from "../../ProtectedRoute/RouteWrapper";

export interface AuthContextFields {
  userRole: Role;
  user: string | null;
  onLogout: () => void;
  onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
  user: null,
  userRole: "admin",
  onLogin: () => {},
  onLogout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
