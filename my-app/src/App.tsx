import { useState } from "react";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";

function App() {
  const [user, setUser] = useState<string | null>(() => {
    const value = localStorage.getItem("user");

    return value;
  });

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  return user !== null ? <Home user={user} /> : <Login onLogin={handleLogin} />;
}
export default App;
