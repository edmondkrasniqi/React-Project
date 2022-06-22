import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";

interface Props {
  user: string;

  onLogout: () => void;
}

export const Home = ({ user, onLogout }: Props) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <div>
        <Sidebar />
      </div>
      <main>
        <h1
          style={{
            position: "absolute",
            top: "60px",
            fontSize: "18px",
          }}
        >
          Welcome {user.split("@")[0]}!
        </h1>
      </main>
    </div>
  );
};
