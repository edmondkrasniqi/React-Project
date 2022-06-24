import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { useAuthContext } from "./lib/context/AuthContext/AuthContext";

function App() {
  const authContext = useAuthContext();

  return authContext.user !== null ? (
    <Home user={authContext.user} />
  ) : (
    <Login />
    // onLogin={authContext.onLogin
  );
}

export default App;
